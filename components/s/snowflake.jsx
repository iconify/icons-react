import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-3upowbj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-3upowbj"/>`,
		"fallback": "openmoji:snowflake",
	});
}

export default Component;
