import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbtwslbuv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbtwslbuv"/>`,
		"fallback": "game-icons:sewed-shell",
	});
}

export default Component;
