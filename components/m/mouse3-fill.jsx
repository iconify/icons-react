import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrog20bwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrog20bwh"/>`,
		"fallback": "bi:mouse3-fill",
	});
}

export default Component;
