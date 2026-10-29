import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m9yyux_le.css';
import '../../css/g/gnvimeb0v.css';
import '../../css/u/u07rftbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m9yyux_le"/><path class="gnvimeb0v"/><path class="u07rftbbn"/></g>`,
		"fallback": "withicons-bauhaus:tree-deciduous",
	});
}

export default Component;
