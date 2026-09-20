import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwa2j_kng.css';
import '../../css/c/cwd0g7-xm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwa2j_kng"/><path class="cwd0g7-xm"/>`,
		"fallback": "openmoji:large-intestine",
	});
}

export default Component;
