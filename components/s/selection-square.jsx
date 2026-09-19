import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw8hk2oxn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw8hk2oxn"/>`,
		"fallback": "at-icons:selection-square",
	});
}

export default Component;
