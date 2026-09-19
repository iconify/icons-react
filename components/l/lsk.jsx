import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztlozlb1k.css';
import '../../css/v/v5j9mdp-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ztlozlb1k"/><path class="v5j9mdp-u"/></g>`,
		"fallback": "cryptocurrency-color:lsk",
	});
}

export default Component;
