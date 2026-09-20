import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcbh3cclu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcbh3cclu"/>`,
		"fallback": "meteor-icons:text",
	});
}

export default Component;
