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
		"content": `<style>.v7ud1zb1d {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-11 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0-3.001a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM10 4.996a.75.75 0 0 0-.694.467l-2.25 5.502a.75.75 0 0 0 1.388.568l.424-1.036h2.262l.423 1.035a.75.75 0 0 0 1.388-.566l-2.247-5.503A.75.75 0 0 0 10 4.996m5.75 0a.75.75 0 0 0-.75.75v1.25h-1.25a.75.75 0 0 0 0 1.5H15v1.25a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5H16.5v-1.25a.75.75 0 0 0-.75-.75m-5.232 4.001H9.48L10 7.73z");
}
</style><path class="v7ud1zb1d"/>`,
		"fallback": "fluent:quiz-24-filled",
	});
}

export default Component;
