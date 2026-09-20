import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnkwc0bul.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/s/sk_bn9biv.css';
import '../../css/c/cwbbp7b8c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qnkwc0bul"/><g class="bc5-xubfs"><circle class="sk_bn9biv"/><path class="cwbbp7b8c"/></g>`,
		"fallback": "openmoji:regional-indicator-a",
	});
}

export default Component;
