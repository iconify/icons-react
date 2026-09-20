import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4-qyw_pz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4-qyw_pz"/>`,
		"fallback": "pinhead:spiky-fish-under-water",
	});
}

export default Component;
