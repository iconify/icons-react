import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zistk-b0s.css';
import '../../css/i/iarkgub8m.css';
import '../../css/z/za0gmsbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zistk-b0s"/><path class="iarkgub8m"/><path class="za0gmsbht"/></g>`,
		"fallback": "lucide:message-square-reply",
	});
}

export default Component;
