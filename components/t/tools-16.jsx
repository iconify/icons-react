import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir6en1bai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir6en1bai"/>`,
		"fallback": "octicon:tools-16",
	});
}

export default Component;
