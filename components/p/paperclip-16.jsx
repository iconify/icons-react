import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvunr3b6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvunr3b6n"/>`,
		"fallback": "garden:paperclip-16",
	});
}

export default Component;
