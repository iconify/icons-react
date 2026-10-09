import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn_u8juie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn_u8juie"/>`,
		"fallback": "energy-icons:link-off-20-bold",
	});
}

export default Component;
