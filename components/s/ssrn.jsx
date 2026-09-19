import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b14u329ii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b14u329ii"/>`,
		"fallback": "academicons:ssrn",
	});
}

export default Component;
