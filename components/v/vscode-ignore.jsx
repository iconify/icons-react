import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc801-15m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc801-15m"/>`,
		"fallback": "catppuccin:vscode-ignore",
	});
}

export default Component;
