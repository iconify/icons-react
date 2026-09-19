import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooot1hbxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooot1hbxm"/>`,
		"fallback": "file-icons:rhino3d",
	});
}

export default Component;
