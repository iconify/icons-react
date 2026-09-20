import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awr86_bao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awr86_bao"/>`,
		"fallback": "lsicon:park-outline",
	});
}

export default Component;
