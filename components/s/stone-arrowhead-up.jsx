import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez4kkvd4m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez4kkvd4m"/>`,
		"fallback": "pinhead:stone-arrowhead-up",
	});
}

export default Component;
