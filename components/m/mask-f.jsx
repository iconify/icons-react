import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz6r-y-dw.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz6r-y-dw"/>`,
		"fallback": "jam:mask-f",
	});
}

export default Component;
