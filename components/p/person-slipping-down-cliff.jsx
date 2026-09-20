import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9zjmsbyg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9zjmsbyg"/>`,
		"fallback": "pinhead:person-slipping-down-cliff",
	});
}

export default Component;
