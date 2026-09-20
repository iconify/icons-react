import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkon69jfq.css';
import '../../css/z/zbemz-ixu.css';
import '../../css/s/sa9u68h3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jkon69jfq"/><path class="zbemz-ixu"/><path class="sa9u68h3k"/></g>`,
		"fallback": "reicon:translate-duotone",
	});
}

export default Component;
