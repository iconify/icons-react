import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gxsarf2zf.css';
import '../../css/j/j2v5nv29v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gxsarf2zf"/><path class="j2v5nv29v"/></g>`,
		"fallback": "healthicons:risk-analysis",
	});
}

export default Component;
