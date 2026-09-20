import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3pejtb2z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3pejtb2z"/>`,
		"fallback": "streamline:online-medical-web-service-remix",
	});
}

export default Component;
