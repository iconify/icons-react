import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7-_1ubpt.css';
import '../../css/x/xz0ej2b-a.css';
import '../../css/u/u6n70hbtk.css';
import '../../css/x/xqfg9cdhq.css';
import '../../css/c/cx_n2ob0h.css';
import '../../css/p/py7cubcbx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y7-_1ubpt"/><path class="xz0ej2b-a"/><circle class="u6n70hbtk"/><path class="xqfg9cdhq"/><path class="cx_n2ob0h"/><path class="py7cubcbx"/>`,
		"fallback": "openmoji:nauseated-face",
	});
}

export default Component;
