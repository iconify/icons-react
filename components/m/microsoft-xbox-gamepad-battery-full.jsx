import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwknlm9zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwknlm9zg"/>`,
		"fallback": "mdi:microsoft-xbox-gamepad-battery-full",
	});
}

export default Component;
