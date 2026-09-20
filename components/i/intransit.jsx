import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lac0wjbud.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lac0wjbud"/>`,
		"fallback": "wpf:intransit",
	});
}

export default Component;
