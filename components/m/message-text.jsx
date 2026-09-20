import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie0e-hgta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie0e-hgta"/>`,
		"fallback": "mdi-light:message-text",
	});
}

export default Component;
