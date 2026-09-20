import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssoo11b4a.css';
import '../../css/t/twxx0x1-g.css';
import '../../css/a/a4zn2sc5c.css';

const viewBox = {"width":100,"height":100,"top":-33.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ssoo11b4a"/><path class="twxx0x1-g"/><path class="a4zn2sc5c"/></g>`,
		"fallback": "thesvg:lutece",
	});
}

export default Component;
