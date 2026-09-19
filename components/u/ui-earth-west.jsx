import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e32cefbaq.css';
import '../../css/o/os3k17bny.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e32cefbaq"/><path class="os3k17bny"/>`,
		"fallback": "geo:ui-earth-west",
	});
}

export default Component;
