import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvmkm6hev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvmkm6hev"/>`,
		"fallback": "reicon:routing5-filled",
	});
}

export default Component;
