import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_5rkzbve.css';
import '../../css/d/dxid63b0b.css';
import '../../css/u/ugqgu3bir.css';
import '../../css/n/n8kf28bbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGRVeuBdhT)" class="cuyn6tgcc"><path class="c_5rkzbve"/><path class="dxid63b0b"/><path class="ugqgu3bir"/></g><defs><clipPath id="SVGRVeuBdhT"><path class="n8kf28bbi"/></clipPath></defs></g>`,
		"fallback": "gravity-ui:server-plus",
	});
}

export default Component;
