import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfc8g4bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfc8g4bdt"/>`,
		"fallback": "keyline-icons:settings-fill",
	});
}

export default Component;
