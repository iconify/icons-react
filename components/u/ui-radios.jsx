import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxbt59n7n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxbt59n7n"/>`,
		"fallback": "bi:ui-radios",
	});
}

export default Component;
