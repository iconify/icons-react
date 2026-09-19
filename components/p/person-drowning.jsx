import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_31y-bqh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_31y-bqh"/>`,
		"fallback": "fa7-solid:person-drowning",
	});
}

export default Component;
