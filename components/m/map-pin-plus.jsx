import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az1a-kbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az1a-kbmk"/>`,
		"fallback": "vadivam:map-pin-plus",
	});
}

export default Component;
