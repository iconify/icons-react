import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba680n3we.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba680n3we"/>`,
		"fallback": "streamline-block:other-arrows-expand",
	});
}

export default Component;
