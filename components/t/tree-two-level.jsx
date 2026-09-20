import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foe4c7nyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="foe4c7nyp"/>`,
		"fallback": "ix:tree-two-level",
	});
}

export default Component;
