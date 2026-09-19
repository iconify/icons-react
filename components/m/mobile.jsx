import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5tpnz--a.css';
import '../../css/q/qn50x0b6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5tpnz--a"/><path class="qn50x0b6w"/>`,
		"fallback": "cil:mobile",
	});
}

export default Component;
