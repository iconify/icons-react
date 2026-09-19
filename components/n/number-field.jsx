import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6jd2bx8o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6jd2bx8o"/>`,
		"fallback": "fluent-mdl2:number-field",
	});
}

export default Component;
