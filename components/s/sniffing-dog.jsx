import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqo2eehvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqo2eehvv"/>`,
		"fallback": "game-icons:sniffing-dog",
	});
}

export default Component;
