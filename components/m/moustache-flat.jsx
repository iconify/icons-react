import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4ldzj_ei.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e4ldzj_ei"/>`,
		"fallback": "streamline-flex-color:moustache-flat",
	});
}

export default Component;
