import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/annt9abeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="annt9abeu"/>`,
		"fallback": "griddy-icons:rows-three",
	});
}

export default Component;
