import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz9t_ne3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sz9t_ne3p"/>`,
		"fallback": "streamline-sharp:mail-send-email-message-solid",
	});
}

export default Component;
