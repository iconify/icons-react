import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlr07wbhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xlr07wbhb"/>`,
		"fallback": "lsicon:shelf-up-filled",
	});
}

export default Component;
