import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dek9bkq9j.css';
import '../../css/f/fsclr0dbg.css';
import '../../css/h/hsyg8kbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dek9bkq9j"/><path clip-rule="evenodd" class="fsclr0dbg"/><path class="hsyg8kbzj"/>`,
		"fallback": "solar:passport-bold-duotone",
	});
}

export default Component;
