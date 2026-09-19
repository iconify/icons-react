import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u39ugpb2d.css';
import '../../css/y/yyg9mvblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u39ugpb2d"/><path class="yyg9mvblp"/></g>`,
		"fallback": "bitcoin-icons:sofa-outline",
	});
}

export default Component;
