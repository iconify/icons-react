import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmblh-wku.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bckwe4qia.css';
import '../../css/e/eg485t5kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmblh-wku secondary"/><g class="dt0cm9dhy primary"><path class="bckwe4qia"/><path class="eg485t5kb"/></g>`,
		"fallback": "iconaut:key-round-duo",
	});
}

export default Component;
