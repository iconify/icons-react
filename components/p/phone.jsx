import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw-o6fboe.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw-o6fboe"/>`,
		"fallback": "wpf:phone",
	});
}

export default Component;
