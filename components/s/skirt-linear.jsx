import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzfz1zb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzfz1zb5d"/>`,
		"fallback": "solar:skirt-linear",
	});
}

export default Component;
