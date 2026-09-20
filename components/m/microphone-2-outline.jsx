import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faxw97p3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="faxw97p3l"/>`,
		"fallback": "solar:microphone-2-outline",
	});
}

export default Component;
