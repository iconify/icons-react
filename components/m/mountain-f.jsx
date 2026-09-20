import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd4rf3b7g.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd4rf3b7g"/>`,
		"fallback": "jam:mountain-f",
	});
}

export default Component;
