import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdpjm0b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdpjm0b7u"/>`,
		"fallback": "thesvg:maildotcom",
	});
}

export default Component;
