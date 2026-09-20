import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c58930t5b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c58930t5b"/>`,
		"fallback": "lsicon:menu-endways-filled",
	});
}

export default Component;
