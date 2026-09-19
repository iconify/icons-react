import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej8uesbmu.css';
import '../../css/d/dgaovib7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej8uesbmu"/><path class="dgaovib7i"/>`,
		"fallback": "ion:social-twitch-outline",
	});
}

export default Component;
