import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw3f1ccle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mw3f1ccle"/>`,
		"fallback": "prime:trophy",
	});
}

export default Component;
