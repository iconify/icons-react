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
		"content": `<style>.cvs2pbbvd {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m4-1.5v3A1.5 1.5 0 0 0 7.5 13h4.058c.4 0 .789-.137 1.1-.39l1.786-1.444a1.5 1.5 0 0 0 0-2.332L12.658 7.39a1.75 1.75 0 0 0-1.1-.39H7.5A1.5 1.5 0 0 0 6 8.5");
}
</style><path class="cvs2pbbvd"/>`,
		"fallback": "fluent:tag-circle-20-filled",
	});
}

export default Component;
