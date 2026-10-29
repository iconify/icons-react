import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbwijoybt.css';
import '../../css/g/gzf5e7bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wm-k zbwijoybt"/><circle class="gzf5e7bkx wm-a"/></g>`,
		"fallback": "withicons:paper-fan-solid",
	});
}

export default Component;
