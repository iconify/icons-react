import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnxv5rusv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnxv5rusv"/>`,
		"fallback": "mingcute:skirt-fill",
	});
}

export default Component;
