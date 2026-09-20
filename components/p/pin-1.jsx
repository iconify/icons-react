import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkslc6b1f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkslc6b1f"/>`,
		"fallback": "streamline-flex:pin-1",
	});
}

export default Component;
