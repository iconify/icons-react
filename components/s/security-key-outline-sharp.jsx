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
		"content": `<style>.saqpgdbsf {
  fill: currentColor;
  d: path("M8.808 22v-4.558H7V2h10v15.442h-1.808V22zM12 12.02q.962 0 1.635-.668t.673-1.621q0-.97-.674-1.649q-.673-.678-1.634-.678t-1.634.678t-.674 1.649q0 .953.674 1.62q.673.668 1.634.668M9.808 21h4.404v-3.558H9.808zM8 16.442h8V3H8zm4-5.423q-.54 0-.914-.374t-.375-.914t.374-.934t.915-.393t.934.393t.393.934t-.393.914t-.934.374m-4 5.423h8z");
}
</style><path class="saqpgdbsf"/>`,
		"fallback": "material-symbols-light:security-key-outline-sharp",
	});
}

export default Component;
