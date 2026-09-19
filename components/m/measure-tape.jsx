import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj86w2baj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj86w2baj"/>`,
		"fallback": "game-icons:measure-tape",
	});
}

export default Component;
