import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pv0-h2mmf.css';
import '../../css/k/k77tepgtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pv0-h2mmf"/><path class="k77tepgtb"/></g>`,
		"fallback": "iconoir:pine-tree",
	});
}

export default Component;
