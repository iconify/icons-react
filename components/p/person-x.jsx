import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlts9hb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlts9hb6i"/>`,
		"fallback": "noviair-light:person-x",
	});
}

export default Component;
