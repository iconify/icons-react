import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7fxexb_f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7fxexb_f"/>`,
		"fallback": "codicon:mcp-compact",
	});
}

export default Component;
