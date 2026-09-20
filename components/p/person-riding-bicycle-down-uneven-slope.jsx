import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_12uccoh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_12uccoh"/>`,
		"fallback": "pinhead:person-riding-bicycle-down-uneven-slope",
	});
}

export default Component;
