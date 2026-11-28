import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj2248f8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj2248f8u"/>`,
		"fallback": "noviair-light:jar-x",
	});
}

export default Component;
