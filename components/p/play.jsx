import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgqu7mb4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgqu7mb4j"/>`,
		"fallback": "at-icons:play",
	});
}

export default Component;
