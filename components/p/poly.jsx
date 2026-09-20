import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce3ia3amw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce3ia3amw"/>`,
		"fallback": "simple-icons:poly",
	});
}

export default Component;
