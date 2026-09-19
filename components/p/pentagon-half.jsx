import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waetc2bmf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waetc2bmf"/>`,
		"fallback": "bi:pentagon-half",
	});
}

export default Component;
