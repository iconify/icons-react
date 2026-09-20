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
		"content": `<style>.rac6vubkj {
  fill: currentColor;
  d: path("M8.808 22v-4.558H7V2h10v15.442h-1.808V22zM12 12.02q.962 0 1.635-.668t.673-1.621q0-.97-.674-1.649q-.673-.678-1.634-.678t-1.634.678t-.674 1.649q0 .953.674 1.62q.673.668 1.634.668M9.808 21h4.404v-3.558H9.808zM12 11.02q-.54 0-.914-.375t-.375-.914t.374-.934t.915-.393t.934.393t.393.934t-.393.914t-.934.374");
}
</style><path class="rac6vubkj"/>`,
		"fallback": "material-symbols-light:security-key-sharp",
	});
}

export default Component;
