import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhivx6d3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhivx6d3v"/>`,
		"fallback": "la:star-solid",
	});
}

export default Component;
