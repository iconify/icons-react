import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni8v59ceb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ni8v59ceb"/>`,
		"fallback": "lsicon:volume-filled",
	});
}

export default Component;
