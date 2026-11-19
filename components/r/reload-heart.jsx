import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcinz6npu.css';
import '../../css/g/gx8eojmco.css';
import '../../css/a/ax43zvhaq.css';
import '../../css/p/pq6n4cb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gcinz6npu"/><path class="gx8eojmco"/><path class="ax43zvhaq"/><path class="pq6n4cb4v"/></g>`,
		"fallback": "andrsrxn:reload-heart",
	});
}

export default Component;
