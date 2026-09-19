import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fiuzy_whq.css';
import '../../css/i/i5mj2xiuf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fiuzy_whq"/><path class="i5mj2xiuf"/></g>`,
		"fallback": "fluent-emoji-flat:money-bag",
	});
}

export default Component;
