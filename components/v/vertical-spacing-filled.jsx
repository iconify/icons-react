import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr2ppd9zo.css';
import '../../css/g/goxr0e-pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr2ppd9zo"/><rect class="goxr0e-pz"/>`,
		"fallback": "boxicons:vertical-spacing-filled",
	});
}

export default Component;
