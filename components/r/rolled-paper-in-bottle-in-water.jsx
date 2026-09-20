import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwq-kcccm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwq-kcccm"/>`,
		"fallback": "pinhead:rolled-paper-in-bottle-in-water",
	});
}

export default Component;
