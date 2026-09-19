import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu39jfbck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu39jfbck"/>`,
		"fallback": "game-icons:thwomp",
	});
}

export default Component;
