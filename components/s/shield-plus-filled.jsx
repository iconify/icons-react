import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvb5if0vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvb5if0vz"/>`,
		"fallback": "reicon:shield-plus-filled",
	});
}

export default Component;
