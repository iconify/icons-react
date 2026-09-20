import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js3nu1ssz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js3nu1ssz"/>`,
		"fallback": "pinhead:person-slipping-down-cliff-into-water",
	});
}

export default Component;
