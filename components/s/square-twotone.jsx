import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd5cwp.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd5cwp"/>`,
		"fallback": "line-md:square-twotone",
	});
}

export default Component;
