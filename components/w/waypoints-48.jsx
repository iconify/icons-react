import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kws3gabmt.css';
import '../../css/h/hjb9uvnoq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kws3gabmt"/><path class="hjb9uvnoq"/>`,
		"fallback": "energy-icons:waypoints-48",
	});
}

export default Component;
