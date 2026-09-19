import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo8lcs_8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo8lcs_8m"/>`,
		"fallback": "ion:md-battery-charging",
	});
}

export default Component;
