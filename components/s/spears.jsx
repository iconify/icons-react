import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g270unitk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g270unitk"/>`,
		"fallback": "game-icons:spears",
	});
}

export default Component;
