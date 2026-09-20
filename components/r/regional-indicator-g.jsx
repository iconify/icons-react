import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htu6zoakn.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/v/vb7hlhboo.css';
import '../../css/r/rf2j4mm1f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="htu6zoakn"/><g class="bc5-xubfs"><circle class="vb7hlhboo"/><path class="rf2j4mm1f"/></g>`,
		"fallback": "openmoji:regional-indicator-g",
	});
}

export default Component;
