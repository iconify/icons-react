import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nikyyvbxf.css';
import '../../css/g/gq3csj2ea.css';
import '../../css/q/qxg00ja2v.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMaskedNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="nikyyvbxf"/><path class="gq3csj2ea"/><path clip-rule="evenodd" class="qxg00ja2v"/></g><defs><clipPath id="healthiconsMaskedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:masked-negative",
	});
}

export default Component;
