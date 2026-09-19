import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsx74p8gt.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsx74p8gt"/>`,
		"fallback": "fa:table",
	});
}

export default Component;
