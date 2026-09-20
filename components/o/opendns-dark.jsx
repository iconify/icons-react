import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxsv4ab9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxsv4ab9t"/>`,
		"fallback": "selfhst:opendns-dark",
	});
}

export default Component;
