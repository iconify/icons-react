import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiy1g7h8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiy1g7h8g"/>`,
		"fallback": "streamline-logos:qualcomm-logo",
	});
}

export default Component;
