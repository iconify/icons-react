import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvkkn3b9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvkkn3b9s"/>`,
		"fallback": "carbon:smell",
	});
}

export default Component;
