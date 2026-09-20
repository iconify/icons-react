import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o3-x1-bib.css';
import '../../css/w/w63q4edhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o3-x1-bib"/><path class="w63q4edhz"/></g>`,
		"fallback": "streamline-freehand:login-rectangle",
	});
}

export default Component;
