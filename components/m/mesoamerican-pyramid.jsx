import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggy21bbky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggy21bbky"/>`,
		"fallback": "pinhead:mesoamerican-pyramid",
	});
}

export default Component;
