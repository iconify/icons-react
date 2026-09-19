import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4jxjzb6o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4jxjzb6o"/>`,
		"fallback": "f7:photo-fill-on-rectangle-fill",
	});
}

export default Component;
