import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl0y2rbzz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl0y2rbzz"/>`,
		"fallback": "bi:text-indent-left",
	});
}

export default Component;
