import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7yu7jbni.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7yu7jbni"/>`,
		"fallback": "la:prescription-bottle-alt",
	});
}

export default Component;
