import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8d273bat.css';
import '../../css/b/b81mgxb0y.css';
import '../../css/y/y8nlgsb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8d273bat"/><path class="b81mgxb0y"/><path class="y8nlgsb7k"/>`,
		"fallback": "solar:tennis-bold",
	});
}

export default Component;
