import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik8j_0m_s.css';
import '../../css/l/lm0uu894d.css';
import '../../css/i/iltdgbc8d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik8j_0m_s"/><path class="lm0uu894d"/><path class="iltdgbc8d"/>`,
		"fallback": "oui:nav-anomaly-detection",
	});
}

export default Component;
