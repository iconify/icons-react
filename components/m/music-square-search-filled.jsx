import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wu2q-gb7k.css';
import '../../css/g/gga69cc5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wu2q-gb7k"/><path class="gga69cc5d"/></g>`,
		"fallback": "reicon:music-square-search-filled",
	});
}

export default Component;
