import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqim5fb1n.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqim5fb1n"/>`,
		"fallback": "wpf:radio",
	});
}

export default Component;
