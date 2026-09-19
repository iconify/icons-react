import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb46l2bag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb46l2bag"/>`,
		"fallback": "cryptocurrency:nmr",
	});
}

export default Component;
