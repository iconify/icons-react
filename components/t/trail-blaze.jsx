import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oam-6ybfc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oam-6ybfc"/>`,
		"fallback": "pinhead:trail-blaze",
	});
}

export default Component;
