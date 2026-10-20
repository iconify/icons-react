import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrurpboo.css';
import '../../css/a/a3afzd8xy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrurpboo"/><path class="a3afzd8xy"/>`,
		"fallback": "energy-icons:message-question-48",
	});
}

export default Component;
