import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn57_fb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn57_fb3x"/>`,
		"fallback": "simple-icons:primevideo",
	});
}

export default Component;
