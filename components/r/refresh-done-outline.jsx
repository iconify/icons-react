import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv-yu1hyb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv-yu1hyb"/>`,
		"fallback": "lsicon:refresh-done-outline",
	});
}

export default Component;
