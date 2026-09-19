import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drr888o3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drr888o3b"/>`,
		"fallback": "codicon:triangle-right",
	});
}

export default Component;
