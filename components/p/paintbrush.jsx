import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asg9s5bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asg9s5bxi"/>`,
		"fallback": "keyline-icons:paintbrush",
	});
}

export default Component;
