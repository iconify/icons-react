import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kldy0bc9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kldy0bc9j"/>`,
		"fallback": "ix:project-duplicate",
	});
}

export default Component;
