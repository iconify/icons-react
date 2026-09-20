import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5mfk_bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5mfk_bhm"/>`,
		"fallback": "simple-icons:monoprix",
	});
}

export default Component;
