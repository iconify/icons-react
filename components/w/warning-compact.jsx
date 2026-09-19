import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do17ynreu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do17ynreu"/>`,
		"fallback": "codicon:warning-compact",
	});
}

export default Component;
