import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc67xp7dw.css';

const viewBox = {"width":400,"height":90};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc67xp7dw"/>`,
		"fallback": "thesvg-color:santander",
	});
}

export default Component;
