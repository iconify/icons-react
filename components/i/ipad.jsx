import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdolti6_s.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdolti6_s"/>`,
		"fallback": "ps:ipad",
	});
}

export default Component;
