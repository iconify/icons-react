import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ge4ttbaxi.css';
import '../../css/p/p1fwh-1ln.css';
import '../../css/u/u3vs50bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ge4ttbaxi"/><path clip-rule="evenodd" class="p1fwh-1ln"/><path class="u3vs50bgi"/></g>`,
		"fallback": "reicon:music-slider2-duotone",
	});
}

export default Component;
