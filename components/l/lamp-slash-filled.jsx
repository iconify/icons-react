import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq6_t6blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq6_t6blo"/>`,
		"fallback": "reicon:lamp-slash-filled",
	});
}

export default Component;
