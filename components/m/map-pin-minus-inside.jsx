import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myfzz2bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myfzz2bnt"/>`,
		"fallback": "vadivam:map-pin-minus-inside",
	});
}

export default Component;
