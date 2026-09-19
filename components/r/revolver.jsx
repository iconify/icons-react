import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo903tb7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo903tb7v"/>`,
		"fallback": "game-icons:revolver",
	});
}

export default Component;
