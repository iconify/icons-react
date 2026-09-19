import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7tooesbd.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7tooesbd"/>`,
		"fallback": "fa-brands:itunes-note",
	});
}

export default Component;
