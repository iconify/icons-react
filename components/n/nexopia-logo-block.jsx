import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vue9z5odm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vue9z5odm"/>`,
		"fallback": "streamline-logos:nexopia-logo-block",
	});
}

export default Component;
