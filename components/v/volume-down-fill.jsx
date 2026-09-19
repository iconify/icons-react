import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/necg2lb8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="necg2lb8x"/>`,
		"fallback": "bi:volume-down-fill",
	});
}

export default Component;
