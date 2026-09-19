import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teo0ohb3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teo0ohb3j"/>`,
		"fallback": "game-icons:riposte",
	});
}

export default Component;
