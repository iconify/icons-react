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
		"content": `<style>.pry7hibwt {
  fill: currentColor;
  d: path("M3.5 9.5a6.5 6.5 0 0 1 13 0a.5.5 0 0 0 1 0a7.5 7.5 0 0 0-15 0a.5.5 0 0 0 1 0m6.5-4a4 4 0 0 0-4 4a.5.5 0 0 1-1 0a5 5 0 0 1 10 0a.5.5 0 0 1-1 0a4 4 0 0 0-4-4M7.75 9.25a2.25 2.25 0 1 1 2.75 2.194V13h4a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 1 0-5h4v-1.556A2.25 2.25 0 0 1 7.75 9.25");
}
</style><path class="pry7hibwt"/>`,
		"fallback": "fluent:router-20-filled",
	});
}

export default Component;
