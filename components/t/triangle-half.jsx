import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y96x4nb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y96x4nb0a"/>`,
		"fallback": "boxicons:triangle-half",
	});
}

export default Component;
