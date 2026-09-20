import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_yy9nbaf.css';

const viewBox = {"width":24,"height":24,"left":-3.5,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_yy9nbaf"/>`,
		"fallback": "jam:leaf-f",
	});
}

export default Component;
