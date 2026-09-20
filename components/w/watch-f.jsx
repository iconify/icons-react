import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzf4xnbkf.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzf4xnbkf"/>`,
		"fallback": "jam:watch-f",
	});
}

export default Component;
