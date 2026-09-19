import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqag-kbdd.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqag-kbdd"/>`,
		"fallback": "zmdi:vimeo",
	});
}

export default Component;
