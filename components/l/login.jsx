import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubvq29b5w.css';
import '../../css/u/uoci6xb9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubvq29b5w"/><path class="uoci6xb9o"/>`,
		"fallback": "carbon:login",
	});
}

export default Component;
