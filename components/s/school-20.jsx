import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3h-3_brx.css';
import '../../css/m/m4dy9ybsj.css';
import '../../css/h/hcrkhjb9z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3h-3_brx"/><path class="m4dy9ybsj"/><path class="hcrkhjb9z"/>`,
		"fallback": "energy-icons:school-20",
	});
}

export default Component;
