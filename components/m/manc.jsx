import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os2j4ybkr.css';
import '../../css/r/r2-u52t_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os2j4ybkr"/><path class="r2-u52t_a"/>`,
		"fallback": "token:manc",
	});
}

export default Component;
