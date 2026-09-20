import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg6nh0b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg6nh0b0p"/>`,
		"fallback": "si:sun-set-line",
	});
}

export default Component;
