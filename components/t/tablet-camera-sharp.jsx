import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vy95qsb-j {
  fill: currentColor;
  d: path("M1 20V4h22v16h-5V6H6v14zm6.5 2v-7H10l1-1h2l1 1h2.5v7zm5.738-2.262q.512-.513.512-1.238t-.513-1.237T12 16.75t-1.237.513t-.513 1.237t.513 1.238T12 20.25t1.238-.513");
}
</style><path class="vy95qsb-j"/>`,
		"fallback": "material-symbols:tablet-camera-sharp",
	});
}

export default Component;
