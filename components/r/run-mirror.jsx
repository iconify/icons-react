import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idd3-bjtr.css';
import '../../css/i/ifbp0ub9u.css';
import '../../css/f/fp0jp3bog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idd3-bjtr"/><path class="ifbp0ub9u"/><path class="fp0jp3bog"/>`,
		"fallback": "carbon:run-mirror",
	});
}

export default Component;
