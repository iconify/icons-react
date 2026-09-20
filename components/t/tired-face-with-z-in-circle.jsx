import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyvic_bhl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyvic_bhl"/>`,
		"fallback": "pinhead:tired-face-with-z-in-circle",
	});
}

export default Component;
