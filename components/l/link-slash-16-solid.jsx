import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc6ou7bft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc6ou7bft"/>`,
		"fallback": "heroicons:link-slash-16-solid",
	});
}

export default Component;
