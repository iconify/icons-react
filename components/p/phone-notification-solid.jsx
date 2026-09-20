import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6i98u3o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ls6i98u3o"/>`,
		"fallback": "streamline-flex:phone-notification-solid",
	});
}

export default Component;
