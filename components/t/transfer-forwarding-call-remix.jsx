import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-3j3abqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-3j3abqu"/>`,
		"fallback": "streamline-flex:transfer-forwarding-call-remix",
	});
}

export default Component;
