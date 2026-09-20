import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pld3dsb2b.css';
import '../../css/o/o5-yfr2st.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pld3dsb2b"/><path class="o5-yfr2st"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:tree-circle",
	});
}

export default Component;
