import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0y9kzb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0y9kzb0a"/>`,
		"fallback": "mynaui:smoke-detector-solid",
	});
}

export default Component;
