import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7amu7_fh.css';
import '../../css/f/ftfoyqbcw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7amu7_fh"/><path class="ftfoyqbcw"/>`,
		"fallback": "openmoji:up-left-arrow",
	});
}

export default Component;
