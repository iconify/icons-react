import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mioqd3brp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mioqd3brp"/>`,
		"fallback": "pinhead:people-wearing-traditional-festive-latin-clothes",
	});
}

export default Component;
