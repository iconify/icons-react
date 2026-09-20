import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8chzhbth.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8chzhbth"/>`,
		"fallback": "jam:plane",
	});
}

export default Component;
