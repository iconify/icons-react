import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w57rd2nab.css';
import '../../css/z/z2ewacgol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w57rd2nab"/><path class="z2ewacgol"/></g>`,
		"fallback": "solar:snowflake-bold-duotone",
	});
}

export default Component;
