import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4tqe28pg.css';
import '../../css/r/rfi2jbchm.css';
import '../../css/e/eb9scq8yj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4tqe28pg"/><rect class="rfi2jbchm"/><rect class="eb9scq8yj"/>`,
		"fallback": "bxs:objects-horizontal-left",
	});
}

export default Component;
