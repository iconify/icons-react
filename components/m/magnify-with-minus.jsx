import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy58e45_v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy58e45_v"/>`,
		"fallback": "oui:magnify-with-minus",
	});
}

export default Component;
