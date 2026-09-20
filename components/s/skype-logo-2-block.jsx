import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm0f2cccm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lm0f2cccm"/>`,
		"fallback": "streamline-logos:skype-logo-2-block",
	});
}

export default Component;
