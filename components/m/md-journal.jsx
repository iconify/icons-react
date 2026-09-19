import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm11y1rnv.css';
import '../../css/c/cmgsz-b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm11y1rnv"/><path class="cmgsz-b7t"/>`,
		"fallback": "ion:md-journal",
	});
}

export default Component;
