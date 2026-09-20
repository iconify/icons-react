import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lhp22zb3p {
  fill: currentColor;
  d: path("M7.924 7.235A.5.5 0 0 0 7 7.5v5a.5.5 0 1 0 1 0V9.243l1.576 2.522a.5.5 0 0 0 .848 0L12 9.243V12.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.924-.265L10 10.557zM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z");
}
</style><path class="lhp22zb3p"/>`,
		"fallback": "fluent:rating-mature-20-regular",
	});
}

export default Component;
