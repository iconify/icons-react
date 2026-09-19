import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fujfs3b8a.css';
import '../../css/b/bhpehnfkb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fujfs3b8a"/><path class="bhpehnfkb"/></g>`,
		"fallback": "fluent-emoji-flat:sparkling-heart",
	});
}

export default Component;
