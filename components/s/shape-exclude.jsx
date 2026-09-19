import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqcrtybxv.css';
import '../../css/w/wr6o5qbyd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqcrtybxv"/><path class="wr6o5qbyd"/>`,
		"fallback": "carbon:shape-exclude",
	});
}

export default Component;
