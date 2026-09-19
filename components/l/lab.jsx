import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmbc4zpnu.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmbc4zpnu"/>`,
		"fallback": "ps:lab",
	});
}

export default Component;
