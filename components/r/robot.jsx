import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxqeuww6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxqeuww6b"/>`,
		"fallback": "griddy-icons:robot",
	});
}

export default Component;
