import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwg6rltna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwg6rltna"/>`,
		"fallback": "mdi-light:message-image",
	});
}

export default Component;
