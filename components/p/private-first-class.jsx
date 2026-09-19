import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh_971ftw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh_971ftw"/>`,
		"fallback": "game-icons:private-first-class",
	});
}

export default Component;
