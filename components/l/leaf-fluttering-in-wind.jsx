import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbt3z_bte.css';
import '../../css/p/p--54x55y.css';
import '../../css/s/sl4-7z0-g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbt3z_bte"/><path class="p--54x55y"/><path class="sl4-7z0-g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:leaf-fluttering-in-wind",
	});
}

export default Component;
