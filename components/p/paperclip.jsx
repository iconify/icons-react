import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtg9cxbjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtg9cxbjk"/>`,
		"fallback": "icon-park:paperclip",
	});
}

export default Component;
