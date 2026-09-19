import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9cb8g7fg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9cb8g7fg"/>`,
		"fallback": "carbon:txt",
	});
}

export default Component;
