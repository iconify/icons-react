import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6v728bzl.css';
import '../../css/f/f2qi-6cwe.css';
import '../../css/s/sj3u3hrzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s6v728bzl"/><path clip-rule="evenodd" class="f2qi-6cwe"/><path class="sj3u3hrzd"/></g>`,
		"fallback": "solar:passport-bold-duotone",
	});
}

export default Component;
