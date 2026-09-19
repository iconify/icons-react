import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8vh5obbn.css';
import '../../css/m/m-n3p82rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8vh5obbn"/><path class="m-n3p82rw"/></g>`,
		"fallback": "grommet-icons:stack-overflow",
	});
}

export default Component;
