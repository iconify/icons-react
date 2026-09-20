import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bluf63ski.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bluf63ski"/>`,
		"fallback": "lsicon:user-outline",
	});
}

export default Component;
