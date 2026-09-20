import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc49c80nz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc49c80nz"/>`,
		"fallback": "pinhead:underweight-person-standing",
	});
}

export default Component;
