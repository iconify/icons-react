import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm-9v2lvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bm-9v2lvg"/>`,
		"fallback": "codicon:mcp",
	});
}

export default Component;
