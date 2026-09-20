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
		"content": `<style>.khnqc1b-j {
  fill: currentColor;
  d: path("M2 22V6h4V2h16v16h-4v4zm6-6h12V4H8zm2-5V9h8v2z");
}
</style><path class="khnqc1b-j"/>`,
		"fallback": "material-symbols:shadow-minus-sharp",
	});
}

export default Component;
