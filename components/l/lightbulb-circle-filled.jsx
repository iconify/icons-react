import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkcm51b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkcm51b9o"/>`,
		"fallback": "tdesign:lightbulb-circle-filled",
	});
}

export default Component;
