import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejhsgz2nc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejhsgz2nc"/>`,
		"fallback": "streamline-flex:volume-level-high",
	});
}

export default Component;
