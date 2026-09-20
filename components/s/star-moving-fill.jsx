import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtkbd7gbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtkbd7gbf"/>`,
		"fallback": "mage:star-moving-fill",
	});
}

export default Component;
