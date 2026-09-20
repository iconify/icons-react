import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n4v2kwb_q.css';
import '../../css/i/izo4pibwp.css';
import '../../css/a/au9wb8bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n4v2kwb_q"/><path class="izo4pibwp"/><path class="au9wb8bvv"/></g>`,
		"fallback": "streamline-freehand-color:performance-increase-clipboard",
	});
}

export default Component;
