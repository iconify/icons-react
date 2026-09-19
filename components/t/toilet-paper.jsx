import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9b2swbio.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9b2swbio"/>`,
		"fallback": "fa6-solid:toilet-paper",
	});
}

export default Component;
