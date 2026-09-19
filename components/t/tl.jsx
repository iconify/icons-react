import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jgv76kwto.css';
import '../../css/a/aspkqopjm.css';
import '../../css/i/ic329ryoo.css';
import '../../css/b/b_rwou1ju.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jgv76kwto"/><path clip-rule="evenodd" class="aspkqopjm"/><path clip-rule="evenodd" class="ic329ryoo"/><path clip-rule="evenodd" class="b_rwou1ju"/></g>`,
		"fallback": "flagpack:tl",
	});
}

export default Component;
