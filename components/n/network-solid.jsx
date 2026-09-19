import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hz38l9bau.css';
import '../../css/b/bhse_2bgx.css';
import '../../css/v/v509wnbnq.css';
import '../../css/r/r7ac2ob5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="hz38l9bau"/><rect class="bhse_2bgx"/><rect class="v509wnbnq"/><path class="r7ac2ob5u"/></g>`,
		"fallback": "iconoir:network-solid",
	});
}

export default Component;
