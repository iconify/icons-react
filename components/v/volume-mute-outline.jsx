import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krrro6b6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krrro6b6n"/>`,
		"fallback": "lsicon:volume-mute-outline",
	});
}

export default Component;
