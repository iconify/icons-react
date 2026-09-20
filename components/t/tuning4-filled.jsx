import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxgt88b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxgt88b3d"/>`,
		"fallback": "reicon:tuning4-filled",
	});
}

export default Component;
