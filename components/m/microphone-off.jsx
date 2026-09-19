import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxy6xi-um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jxy6xi-um"/>`,
		"fallback": "griddy-icons:microphone-off",
	});
}

export default Component;
