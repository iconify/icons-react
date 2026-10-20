import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrurpboo.css';
import '../../css/v/vvmgcrxho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrurpboo"/><path class="vvmgcrxho"/>`,
		"fallback": "energy-icons:message-sparkle-48",
	});
}

export default Component;
