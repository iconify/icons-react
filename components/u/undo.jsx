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
		"content": `<style>.t8b1-f6ti {
  fill: currentColor;
  d: path("M7.404 18v-1h7.254q1.556 0 2.65-1.067q1.096-1.067 1.096-2.606t-1.095-2.596q-1.096-1.058-2.651-1.058H6.916l2.965 2.965l-.708.708L5 9.173L9.173 5l.708.708l-2.965 2.965h7.742q1.963 0 3.355 1.354q1.39 1.354 1.39 3.3t-1.39 3.31T14.657 18z");
}
</style><path class="t8b1-f6ti"/>`,
		"fallback": "material-symbols-light:undo",
	});
}

export default Component;
