import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/t/tbrf4r.css';
import '../../css/n/n84zbz.css';
import '../../css/f/fill-from-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c tbrf4r"/><path class="a0m25c n84zbz"/>`,
		"fallback": "line-md:square-twotone-to-confirm-square-transition",
	});
}

export default Component;
