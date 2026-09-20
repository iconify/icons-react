import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dytoz5beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dytoz5beu"/>`,
		"fallback": "simple-icons:okcupid",
	});
}

export default Component;
