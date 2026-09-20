import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etj7zqhmh.css';
import '../../css/n/nwng0crdr.css';
import '../../css/a/a3uc20buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etj7zqhmh"/><path clip-rule="evenodd" class="nwng0crdr"/><path class="a3uc20buk"/></g>`,
		"fallback": "solar:treadmill-round-bold",
	});
}

export default Component;
