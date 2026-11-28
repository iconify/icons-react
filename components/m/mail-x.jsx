import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr-3k3jjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr-3k3jjy"/>`,
		"fallback": "noviair-light:mail-x",
	});
}

export default Component;
