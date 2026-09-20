import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxfgjjb4v.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxfgjjb4v"/>`,
		"fallback": "wpf:pause",
	});
}

export default Component;
