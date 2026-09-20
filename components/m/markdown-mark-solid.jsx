import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz1np5bcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz1np5bcu"/>`,
		"fallback": "pajamas:markdown-mark-solid",
	});
}

export default Component;
