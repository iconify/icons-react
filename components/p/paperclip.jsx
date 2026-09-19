import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv7gvnbct.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv7gvnbct"/>`,
		"fallback": "at-icons:paperclip",
	});
}

export default Component;
