import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyox18xaz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyox18xaz"/>`,
		"fallback": "streamline:pathfinder-union",
	});
}

export default Component;
