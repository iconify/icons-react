import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrp49-r3f.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrp49-r3f"/><path class="bwibdw4bb"/>`,
		"fallback": "boxicons:sad",
	});
}

export default Component;
