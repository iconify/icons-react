import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq61xm8en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq61xm8en"/>`,
		"fallback": "noviair:phone-arrow-right",
	});
}

export default Component;
