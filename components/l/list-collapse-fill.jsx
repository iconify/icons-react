import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayrup6xiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayrup6xiw"/>`,
		"fallback": "keyline-icons:list-collapse-fill",
	});
}

export default Component;
