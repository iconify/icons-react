import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lgkd2pxuo.css';
import '../../css/q/qa3v46kbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lgkd2pxuo"/><path class="qa3v46kbi"/></g>`,
		"fallback": "reicon:server-update-filled",
	});
}

export default Component;
