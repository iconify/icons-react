import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuzjs9mod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuzjs9mod"/>`,
		"fallback": "icon-park-outline:stereo-perspective",
	});
}

export default Component;
