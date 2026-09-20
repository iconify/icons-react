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
		"content": `<style>.o2p8znbwv {
  fill: currentColor;
  d: path("M5 23V1h14v5H7v12h12v5zm8-7V9h2.5l1-1h2l1 1H22v7zm4.5-1.75q.725 0 1.238-.513t.512-1.237t-.513-1.237t-1.237-.513t-1.237.513t-.513 1.237t.513 1.238t1.237.512");
}
</style><path class="o2p8znbwv"/>`,
		"fallback": "material-symbols:smartphone-camera-sharp",
	});
}

export default Component;
