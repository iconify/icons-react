import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/brzf3wbow.css';
import '../../css/n/n9yq97bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="brzf3wbow"/><path class="n9yq97bau"/></g>`,
		"fallback": "reicon:notebook2-duotone",
	});
}

export default Component;
