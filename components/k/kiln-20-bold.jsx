import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_-k_fetr.css';
import '../../css/l/l7hzbkbbx.css';
import '../../css/l/lr1_aeb-h.css';
import '../../css/y/yccprlbcu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_-k_fetr"/><path class="l7hzbkbbx"/><path class="lr1_aeb-h"/><path class="yccprlbcu"/>`,
		"fallback": "energy-icons:kiln-20-bold",
	});
}

export default Component;
