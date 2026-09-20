import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw2ojp_cc.css';
import '../../css/e/e04op1bwe.css';
import '../../css/g/gutycobgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw2ojp_cc"/><path class="e04op1bwe"/><path class="gutycobgs"/>`,
		"fallback": "selfhst:mediamanager-dark",
	});
}

export default Component;
