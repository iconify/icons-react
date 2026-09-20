import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ny528-wyy.css';
import '../../css/e/earz2n5yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ny528-wyy"/><path class="earz2n5yt"/></g>`,
		"fallback": "reicon:palette-filled",
	});
}

export default Component;
