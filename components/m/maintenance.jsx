import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w56j2g42u.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w56j2g42u"/>`,
		"fallback": "wpf:maintenance",
	});
}

export default Component;
