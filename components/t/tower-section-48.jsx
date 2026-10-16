import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnwg1wboc.css';
import '../../css/f/fu_1idbur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnwg1wboc"/><path class="fu_1idbur"/>`,
		"fallback": "energy-icons:tower-section-48",
	});
}

export default Component;
