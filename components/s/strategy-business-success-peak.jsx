import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ca13g7t3o.css';
import '../../css/h/h78girq9f.css';
import '../../css/u/u54lry2-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ca13g7t3o"/><path class="h78girq9f"/><path class="u54lry2-j"/></g>`,
		"fallback": "streamline-freehand-color:strategy-business-success-peak",
	});
}

export default Component;
