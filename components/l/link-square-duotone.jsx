import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spcod9vyn.css';
import '../../css/u/ur6qzacoq.css';
import '../../css/p/pp3r6abgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spcod9vyn"/><path class="ur6qzacoq"/><path class="pp3r6abgx"/></g>`,
		"fallback": "reicon:link-square-duotone",
	});
}

export default Component;
