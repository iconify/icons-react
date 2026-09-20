import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2czq3bqk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2czq3bqk"/>`,
		"fallback": "jam:patreon",
	});
}

export default Component;
