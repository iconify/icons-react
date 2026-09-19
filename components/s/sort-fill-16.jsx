import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yocna9rlw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yocna9rlw"/>`,
		"fallback": "garden:sort-fill-16",
	});
}

export default Component;
