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
		"content": `<style>.xto8sg0le {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 2.995 2.824L17 6v4h-4l-.176.005a3 3 0 0 0-2.819 2.819L10 13v4H6a3 3 0 0 1-2.995-2.824L3 14V6a3 3 0 0 1 2.824-2.995L6 3zm2.9 8.001a2 2 0 0 1-.358.652l-.128.14l-4.621 4.621c-.224.224-.496.39-.792.487L11 13l.005-.15a2 2 0 0 1 1.838-1.844L13 11z");
}
</style><path class="xto8sg0le"/>`,
		"fallback": "fluent:note-20-filled",
	});
}

export default Component;
