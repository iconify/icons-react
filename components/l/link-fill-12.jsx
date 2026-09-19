import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv_wzebzi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv_wzebzi"/>`,
		"fallback": "garden:link-fill-12",
	});
}

export default Component;
