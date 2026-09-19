import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myz8l2ote.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myz8l2ote"/>`,
		"fallback": "fluent-mdl2:text-align-middle",
	});
}

export default Component;
