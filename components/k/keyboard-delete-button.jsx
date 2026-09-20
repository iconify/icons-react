import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w0mp90b1v.css';
import '../../css/s/sv05mfuxd.css';
import '../../css/d/d_ldgic0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w0mp90b1v"/><path class="sv05mfuxd"/><path class="d_ldgic0f"/></g>`,
		"fallback": "streamline-freehand-color:keyboard-delete-button",
	});
}

export default Component;
