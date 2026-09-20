import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uapph2b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uapph2b4f"/>`,
		"fallback": "keyline-icons:messages-square",
	});
}

export default Component;
