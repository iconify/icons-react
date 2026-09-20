import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzy3mpo1d.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzy3mpo1d"/>`,
		"fallback": "wpf:news",
	});
}

export default Component;
