import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csed-1b0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csed-1b0j"/>`,
		"fallback": "ix:tasks-open",
	});
}

export default Component;
