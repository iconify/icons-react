import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwv2d3bhh.css';
import '../../css/l/lrqqa_b2z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwv2d3bhh"/><path class="lrqqa_b2z"/>`,
		"fallback": "selfhst:vpn-sentinel-dark",
	});
}

export default Component;
