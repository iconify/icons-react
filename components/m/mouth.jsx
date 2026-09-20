import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wn38pobmn.css';
import '../../css/z/zidpbbc1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wn38pobmn"/><path class="zidpbbc1n"/></g>`,
		"fallback": "lucide:mouth",
	});
}

export default Component;
