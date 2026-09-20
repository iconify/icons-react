import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcezmhb2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcezmhb2y"/>`,
		"fallback": "lsicon:triangle-warning-outline",
	});
}

export default Component;
