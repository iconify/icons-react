import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgm_8n2wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgm_8n2wb"/>`,
		"fallback": "ix:piechart-ai-filled",
	});
}

export default Component;
