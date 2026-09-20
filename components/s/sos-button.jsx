import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwwicdbta.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/u/uckd5ibhg.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwwicdbta"/><path class="in5wtwq8h"/><path class="uckd5ibhg"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:sos-button",
	});
}

export default Component;
