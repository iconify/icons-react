import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0wz6zwkd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0wz6zwkd"/>`,
		"fallback": "pinhead:parking-stall-markings-with-p-wide",
	});
}

export default Component;
