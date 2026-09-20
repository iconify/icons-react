import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mei8n8bzv.css';
import '../../css/d/dbt7xwbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mei8n8bzv"/><path class="dbt7xwbhe"/></g>`,
		"fallback": "streamline-freehand-color:link-paperclip",
	});
}

export default Component;
