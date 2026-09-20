import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi7wnx1bx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi7wnx1bx"/>`,
		"fallback": "selfhst:openpanel-light",
	});
}

export default Component;
