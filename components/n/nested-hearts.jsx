import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th6xvpbxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th6xvpbxk"/>`,
		"fallback": "game-icons:nested-hearts",
	});
}

export default Component;
