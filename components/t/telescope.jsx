import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcp9m9fsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcp9m9fsq"/>`,
		"fallback": "codicon:telescope",
	});
}

export default Component;
