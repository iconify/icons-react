import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/boyzknbju.css';
import '../../css/g/ghd3ioxxg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="boyzknbju"/><path class="ghd3ioxxg"/></g>`,
		"fallback": "foundation:microphone",
	});
}

export default Component;
