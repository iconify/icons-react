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
		"content": `<style>.vzm_cqbnu {
  fill: currentColor;
  d: path("M14 8h4l-4-4zM6.616 21q-.667 0-1.141-.475T5 19.386V16.5h14v2.885q0 .666-.475 1.14t-1.14.475zm-5.039-6.5v-1h20.846v1zM5 11.5V4.616q0-.667.475-1.141T6.615 3H14.5L19 7.5v4z");
}
</style><path class="vzm_cqbnu"/>`,
		"fallback": "material-symbols-light:scan",
	});
}

export default Component;
