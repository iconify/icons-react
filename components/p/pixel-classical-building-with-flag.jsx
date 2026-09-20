import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c17dyebzr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c17dyebzr"/>`,
		"fallback": "pinhead:pixel-classical-building-with-flag",
	});
}

export default Component;
