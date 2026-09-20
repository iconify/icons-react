import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gta3qn_yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gta3qn_yx"/>`,
		"fallback": "subway:right-down-corner-arrow-1",
	});
}

export default Component;
