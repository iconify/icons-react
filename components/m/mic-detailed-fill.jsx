import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjv0t2bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjv0t2bmr"/>`,
		"fallback": "si:mic-detailed-fill",
	});
}

export default Component;
