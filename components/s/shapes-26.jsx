import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxa1bxbih.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxa1bxbih"/>`,
		"fallback": "garden:shapes-26",
	});
}

export default Component;
