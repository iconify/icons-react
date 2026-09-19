import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y4pt0lbxe.css';
import '../../css/v/vt1qf4byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y4pt0lbxe"/><path class="vt1qf4byn"/></g>`,
		"fallback": "gg:keyhole",
	});
}

export default Component;
