import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnn0zzbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnn0zzbxa"/>`,
		"fallback": "guidance:sanitize-hands",
	});
}

export default Component;
