import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htu6zoakn.css';
import '../../css/i/iz026krfb.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/z/z299p9xzk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="htu6zoakn"/><path class="iz026krfb"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="z299p9xzk"/></g>`,
		"fallback": "openmoji:regional-indicator-i",
	});
}

export default Component;
