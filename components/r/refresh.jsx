import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7cbxcbrc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7cbxcbrc"/>`,
		"fallback": "foundation:refresh",
	});
}

export default Component;
