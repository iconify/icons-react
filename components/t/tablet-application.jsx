import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xcql_hb4y.css';
import '../../css/c/chk807gyz.css';
import '../../css/m/mz5j7acld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xcql_hb4y"/><path class="chk807gyz"/><path class="mz5j7acld"/></g>`,
		"fallback": "streamline-freehand:tablet-application",
	});
}

export default Component;
