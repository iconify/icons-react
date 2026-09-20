import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0-so7bmi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o0-so7bmi"/>`,
		"fallback": "streamline-flex:phone-notification-remix",
	});
}

export default Component;
