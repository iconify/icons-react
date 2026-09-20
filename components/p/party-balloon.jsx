import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uiggipapk.css';
import '../../css/a/a0rpqldgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uiggipapk"/><path class="a0rpqldgp"/></g>`,
		"fallback": "streamline-freehand:party-balloon",
	});
}

export default Component;
