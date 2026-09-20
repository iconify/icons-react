import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv1zt7bht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hv1zt7bht"/>`,
		"fallback": "streamline-flex:new-badge-highlight-remix",
	});
}

export default Component;
