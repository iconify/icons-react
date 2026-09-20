import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcxv4abex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcxv4abex"/>`,
		"fallback": "lsicon:sort-outline",
	});
}

export default Component;
