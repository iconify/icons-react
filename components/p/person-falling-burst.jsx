import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1a-lobmz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1a-lobmz"/>`,
		"fallback": "fa7-solid:person-falling-burst",
	});
}

export default Component;
