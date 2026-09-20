import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4uurfb5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4uurfb5v"/>`,
		"fallback": "streamline-flex:watchtower-castle-solid",
	});
}

export default Component;
