import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hny70vbls.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hny70vbls"/>`,
		"fallback": "pinhead:pixel-pound",
	});
}

export default Component;
