import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2dtuibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2dtuibau"/>`,
		"fallback": "vadivam:map-pin-x",
	});
}

export default Component;
