import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csit38b6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csit38b6l"/>`,
		"fallback": "game-icons:light-thorny-triskelion",
	});
}

export default Component;
