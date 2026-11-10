import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqvr-4btw.css';
import '../../css/n/n6fcs2bwg.css';
import '../../css/a/am5binbrc.css';
import '../../css/x/xvulmum9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iqvr-4btw"/><path class="n6fcs2bwg"/><path class="am5binbrc"/><path class="xvulmum9n"/></g>`,
		"fallback": "andrsrxn:music-notes-square",
	});
}

export default Component;
