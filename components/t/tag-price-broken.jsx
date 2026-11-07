import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zf6m_rg7v.css';
import '../../css/d/dv86dk8ai.css';
import '../../css/t/t3tivrbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zf6m_rg7v"/><path class="dv86dk8ai"/><path class="t3tivrbho"/></g>`,
		"fallback": "solar:tag-price-broken",
	});
}

export default Component;
