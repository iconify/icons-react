import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1--uke8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1--uke8f"/>`,
		"fallback": "la:teamspeak",
	});
}

export default Component;
