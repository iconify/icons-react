import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtjw2vb4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtjw2vb4n"/>`,
		"fallback": "streamline:parking-sign-solid",
	});
}

export default Component;
