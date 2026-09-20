import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_2eiab_d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_2eiab_d"/>`,
		"fallback": "la:tumblr-square",
	});
}

export default Component;
