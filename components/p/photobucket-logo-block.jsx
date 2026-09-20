import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8n6-jbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8n6-jbtd"/>`,
		"fallback": "streamline-logos:photobucket-logo-block",
	});
}

export default Component;
