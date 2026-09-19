import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/puaxbydtw.css';
import '../../css/r/rzen44b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="puaxbydtw"/><path class="rzen44b9f"/></g>`,
		"fallback": "flowbite:layers-solid",
	});
}

export default Component;
