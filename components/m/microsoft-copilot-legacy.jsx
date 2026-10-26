import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xve8_cc1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xve8_cc1p"/>`,
		"fallback": "thesvg:microsoft-copilot-legacy",
	});
}

export default Component;
