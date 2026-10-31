import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cdli1kb8z.css';
import '../../css/i/im3vv-bcs.css';
import '../../css/j/j5g7r7bey.css';
import '../../css/d/dsrl4bbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cdli1kb8z wm-shadow"/><path class="im3vv-bcs wm-shadow"/><path class="j5g7r7bey"/><path class="dsrl4bbmg"/></g>`,
		"fallback": "withicons-brutal:navigation-2",
	});
}

export default Component;
