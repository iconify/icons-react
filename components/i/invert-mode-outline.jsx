import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84vznkgo.css';
import '../../css/e/eg1ps4yde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w84vznkgo"/><path class="eg1ps4yde"/>`,
		"fallback": "famicons:invert-mode-outline",
	});
}

export default Component;
