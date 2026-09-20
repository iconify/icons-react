import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.utch7qbmb {
  fill: currentColor;
  d: path("M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v4a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 9.5zm4.146.646l-.646.647l-.646-.647a.5.5 0 1 0-.708.708l.647.646l-.647.646a.5.5 0 1 0 .708.708l.646-.647l.646.647a.5.5 0 1 0 .708-.708L5.207 7.5l.647-.646a.5.5 0 1 0-.708-.708m4 0l-.646.647l-.646-.647a.5.5 0 1 0-.708.708l.647.646l-.647.646a.5.5 0 1 0 .708.708l.646-.647l.646.647a.5.5 0 1 0 .708-.708L9.207 7.5l.647-.646a.5.5 0 0 0-.708-.708M11 8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5");
}
</style><path class="utch7qbmb"/>`,
		"fallback": "fluent:password-16-filled",
	});
}

export default Component;
