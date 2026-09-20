import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8ye8b4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tj8ye8b4q"/>`,
		"fallback": "ix:save-all",
	});
}

export default Component;
