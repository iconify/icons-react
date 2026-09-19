import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p49r76-de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p49r76-de"/>`,
		"fallback": "iconamoon:number-0-light",
	});
}

export default Component;
