import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl5-qvbnp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl5-qvbnp"/>`,
		"fallback": "pinhead:racquet",
	});
}

export default Component;
