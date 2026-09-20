import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3b-n7bhd.css';
import '../../css/x/xz9214hmm.css';
import '../../css/w/wwgiztejx.css';
import '../../css/a/ai7yfdokr.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p3b-n7bhd"><path class="xz9214hmm"/><path class="wwgiztejx"/><path class="ai7yfdokr"/></g>`,
		"fallback": "system-uicons:user",
	});
}

export default Component;
