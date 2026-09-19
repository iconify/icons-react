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
		"content": `<style>.ajvn4_1qw {
  fill: currentColor;
  d: path("M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z");
}
</style><path class="ajvn4_1qw"/>`,
		"fallback": "ic:outline-align-vertical-bottom",
	});
}

export default Component;
