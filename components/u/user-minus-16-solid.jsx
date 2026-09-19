import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i29v76buq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i29v76buq"/>`,
		"fallback": "heroicons:user-minus-16-solid",
	});
}

export default Component;
