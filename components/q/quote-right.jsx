import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7o8dkb3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7o8dkb3b"/>`,
		"fallback": "fa-solid:quote-right",
	});
}

export default Component;
