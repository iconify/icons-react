import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7w7ozbih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7w7ozbih"/>`,
		"fallback": "selfhst:metadata-remote-light",
	});
}

export default Component;
