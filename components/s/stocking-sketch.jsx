import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a-k3z2s9a.css';
import '../../css/i/ifxccrbkd.css';
import '../../css/x/xsm6pfbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a-k3z2s9a"/><path class="ifxccrbkd wm-k"/><path class="wm-a xsm6pfbut"/></g>`,
		"fallback": "withicons:stocking-sketch",
	});
}

export default Component;
