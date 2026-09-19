import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch0uwabrw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch0uwabrw"/>`,
		"fallback": "game-icons:oat",
	});
}

export default Component;
