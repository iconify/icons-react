import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg2pkyu3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg2pkyu3c"/>`,
		"fallback": "nimbus:tools",
	});
}

export default Component;
