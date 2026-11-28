import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0aodv4pp.css';
import '../../css/u/uagz880jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b0aodv4pp secondary"/><path class="primary uagz880jg"/></g>`,
		"fallback": "iconaut:sunset-duotone",
	});
}

export default Component;
