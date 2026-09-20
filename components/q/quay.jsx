import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoa5atgir.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoa5atgir"/>`,
		"fallback": "temaki:quay",
	});
}

export default Component;
