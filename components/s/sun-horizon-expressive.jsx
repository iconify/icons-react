import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buiy88btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buiy88btz"/>`,
		"fallback": "nrk:sun-horizon-expressive",
	});
}

export default Component;
