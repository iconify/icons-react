import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn-591bve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn-591bve"/>`,
		"fallback": "streamline-flex:shield-2",
	});
}

export default Component;
