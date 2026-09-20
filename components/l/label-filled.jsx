import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oni9b4b9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oni9b4b9x"/>`,
		"fallback": "lsicon:label-filled",
	});
}

export default Component;
