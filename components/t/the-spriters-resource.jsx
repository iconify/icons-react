import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blo2lxb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blo2lxb3n"/>`,
		"fallback": "thesvg-color:the-spriters-resource",
	});
}

export default Component;
