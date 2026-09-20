import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1verwbwl.css';
import '../../css/g/g2r24b_3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1verwbwl"/><path class="g2r24b_3n"/>`,
		"fallback": "streamline-pixel:interface-essential-hierarchy-1",
	});
}

export default Component;
