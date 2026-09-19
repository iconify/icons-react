import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwmnbk0gi.css';

const viewBox = {"width":2304,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwmnbk0gi"/>`,
		"fallback": "fa:object-ungroup",
	});
}

export default Component;
