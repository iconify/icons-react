import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bpwqew7kw.css';
import '../../css/q/q18v6hmxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bpwqew7kw"/><path class="q18v6hmxv"/></g>`,
		"fallback": "hugeicons:submarine",
	});
}

export default Component;
