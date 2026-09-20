import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouazhhb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouazhhb9r"/>`,
		"fallback": "lucide:trash-off",
	});
}

export default Component;
