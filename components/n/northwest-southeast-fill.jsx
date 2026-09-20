import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ork6cbxuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ork6cbxuu"/>`,
		"fallback": "si:northwest-southeast-fill",
	});
}

export default Component;
