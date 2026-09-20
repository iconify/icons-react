import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9vru-sib.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9vru-sib"/>`,
		"fallback": "streamline:signal-loading",
	});
}

export default Component;
