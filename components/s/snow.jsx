import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd19m6j6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd19m6j6r"/>`,
		"fallback": "griddy-icons:snow",
	});
}

export default Component;
