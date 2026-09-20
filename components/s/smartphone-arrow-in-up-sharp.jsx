import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgsy0ccso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgsy0ccso"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up-sharp",
	});
}

export default Component;
