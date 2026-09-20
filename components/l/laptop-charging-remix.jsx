import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv657qagf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uv657qagf"/>`,
		"fallback": "streamline:laptop-charging-remix",
	});
}

export default Component;
