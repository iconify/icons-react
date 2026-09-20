import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yk-2fob0v.css';
import '../../css/a/acmzzzbif.css';
import '../../css/f/f1_qbxbln.css';
import '../../css/m/mantc1b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yk-2fob0v"/><path class="acmzzzbif"/><path class="f1_qbxbln"/><path class="mantc1b5u"/></g>`,
		"fallback": "tabler:temperature-snow",
	});
}

export default Component;
