import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmvew9bpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmvew9bpu"/>`,
		"fallback": "selfhst:nike-light",
	});
}

export default Component;
