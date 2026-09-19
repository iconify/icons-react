import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd50wmpdf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd50wmpdf"/>`,
		"fallback": "fa7-brands:itunes-note",
	});
}

export default Component;
