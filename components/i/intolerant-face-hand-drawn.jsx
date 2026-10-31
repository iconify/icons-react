import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ig6238x1n.css';
import '../../css/o/ouvid8buj.css';
import '../../css/o/oerpwe-8p.css';
import '../../css/c/c-syu7b3i.css';
import '../../css/u/uxinc9x9b.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ig6238x1n"/><path class="ouvid8buj"/><path class="oerpwe-8p"/><path class="c-syu7b3i"/><path class="uxinc9x9b"/></g>`,
		"fallback": "streamline-memes:intolerant-face-hand-drawn",
	});
}

export default Component;
