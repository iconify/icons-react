import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k27a35brw.css';

const viewBox = {"width":1600,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k27a35brw"/>`,
		"fallback": "fa:thumbs-up",
	});
}

export default Component;
