import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q_xpl5b9t.css';
import '../../css/e/eyprd0b7p.css';
import '../../css/u/uv1duwbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q_xpl5b9t"/><path class="eyprd0b7p"/><path class="uv1duwbne"/></g>`,
		"fallback": "solar:list-linear",
	});
}

export default Component;
