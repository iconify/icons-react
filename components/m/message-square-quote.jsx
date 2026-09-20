import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e84ca_bra.css';
import '../../css/z/zistk-b0s.css';
import '../../css/l/l6vr66box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e84ca_bra"/><path class="zistk-b0s"/><path class="l6vr66box"/></g>`,
		"fallback": "lucide:message-square-quote",
	});
}

export default Component;
