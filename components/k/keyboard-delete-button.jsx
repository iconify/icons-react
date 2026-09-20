import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cni8xj69v.css';
import '../../css/j/jpbifbbrb.css';
import '../../css/v/vki8epbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cni8xj69v"/><path class="jpbifbbrb"/><path class="vki8epbms"/></g>`,
		"fallback": "streamline-freehand:keyboard-delete-button",
	});
}

export default Component;
