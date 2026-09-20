import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6582di4o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6582di4o"/>`,
		"fallback": "lsicon:list-filled",
	});
}

export default Component;
