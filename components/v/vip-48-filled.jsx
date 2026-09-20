import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cku1vac9k {
  fill: currentColor;
  d: path("M37.75 8A6.25 6.25 0 0 1 44 14.25v19.5A6.25 6.25 0 0 1 37.75 40h-27.5A6.25 6.25 0 0 1 4 33.75v-19.5A6.25 6.25 0 0 1 10.25 8zm-17.306 8.581a1.25 1.25 0 0 0-1.613.725L15 27.388l-3.831-10.082a1.25 1.25 0 0 0-2.338.888l4.662 12.266a1.612 1.612 0 0 0 3.014 0l4.662-12.266a1.25 1.25 0 0 0-.725-1.613m4.306-.081c-.69 0-1.25.56-1.25 1.25v12.5a1.25 1.25 0 1 0 2.5 0v-12.5c0-.69-.56-1.25-1.25-1.25m5.5 0A1.25 1.25 0 0 0 29 17.75v12.5a1.25 1.25 0 1 0 2.5 0V26.5h3a5 5 0 0 0 0-10zM34.5 19a2.5 2.5 0 0 1 0 5h-3v-5z");
}
</style><path class="cku1vac9k"/>`,
		"fallback": "fluent:vip-48-filled",
	});
}

export default Component;
