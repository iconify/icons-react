import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-jz80bxz.css';
import '../../css/b/bxr5_ubtl.css';
import '../../css/n/nt32iqi6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j-jz80bxz"/><path class="bxr5_ubtl"/><path class="nt32iqi6m"/></g>`,
		"fallback": "hugeicons:money-receive-flow-02",
	});
}

export default Component;
