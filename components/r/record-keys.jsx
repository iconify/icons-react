import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt9nc3b-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt9nc3b-c"/>`,
		"fallback": "codicon:record-keys",
	});
}

export default Component;
