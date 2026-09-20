import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbsj38b5r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbsj38b5r"/>`,
		"fallback": "streamline-flex:recycle-1",
	});
}

export default Component;
