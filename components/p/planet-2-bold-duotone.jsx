import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v17fuccch.css';
import '../../css/h/huyag0f5j.css';
import '../../css/v/v4a__jb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v17fuccch"/><path class="huyag0f5j"/><path clip-rule="evenodd" class="v4a__jb5i"/></g>`,
		"fallback": "solar:planet-2-bold-duotone",
	});
}

export default Component;
