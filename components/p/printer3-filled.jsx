import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjztpqbhy.css';
import '../../css/f/fstrfeikg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vjztpqbhy"/><path class="fstrfeikg"/></g>`,
		"fallback": "reicon:printer3-filled",
	});
}

export default Component;
