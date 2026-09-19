import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geig7zbjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geig7zbjo"/>`,
		"fallback": "game-icons:pincers",
	});
}

export default Component;
