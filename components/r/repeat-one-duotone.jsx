import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agcqa4d_f.css';
import '../../css/b/bmkjvsbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agcqa4d_f"/><path class="bmkjvsbkl"/></g>`,
		"fallback": "reicon:repeat-one-duotone",
	});
}

export default Component;
