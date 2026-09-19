import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4c5vcbix.css';

const viewBox = {"width":77,"height":654};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4c5vcbix"/>`,
		"fallback": "ls:period",
	});
}

export default Component;
