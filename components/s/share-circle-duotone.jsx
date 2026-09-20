import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdkk83ane.css';
import '../../css/u/ut1lij9uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fdkk83ane"/><path class="ut1lij9uq"/></g>`,
		"fallback": "reicon:share-circle-duotone",
	});
}

export default Component;
