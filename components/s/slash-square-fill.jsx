import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukh96f2tw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukh96f2tw"/>`,
		"fallback": "bi:slash-square-fill",
	});
}

export default Component;
