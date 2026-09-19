import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y98jkdbqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y98jkdbqc"/>`,
		"fallback": "game-icons:liberty-wing",
	});
}

export default Component;
