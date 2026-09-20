import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/q/qpmlbactx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xcv6q1bnv"/><path class="qpmlbactx"/></g>`,
		"fallback": "streamline:money-graph-pie-chart-product-data-analysis-analytics-pie-graph-business-chart",
	});
}

export default Component;
