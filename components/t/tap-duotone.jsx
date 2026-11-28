import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xs3k90-jj.css';
import '../../css/a/aez5b5bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xs3k90-jj"/><path class="aez5b5bgl primary"/></g>`,
		"fallback": "iconaut:tap-duotone",
	});
}

export default Component;
