import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld5r8bbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld5r8bbdh"/>`,
		"fallback": "reicon:slider-horizontal2",
	});
}

export default Component;
