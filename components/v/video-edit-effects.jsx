import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/isv_boq8z.css';
import '../../css/h/h9s5--3pf.css';
import '../../css/k/k3a0r8b1f.css';
import '../../css/p/pljx_gb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="isv_boq8z"/><path class="h9s5--3pf"/><path class="k3a0r8b1f"/><path class="pljx_gb_a"/></g>`,
		"fallback": "streamline-freehand-color:video-edit-effects",
	});
}

export default Component;
