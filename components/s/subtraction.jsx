import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sno168bul.css';

const viewBox = {"width":20,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sno168bul"/>`,
		"fallback": "jam:subtraction",
	});
}

export default Component;
