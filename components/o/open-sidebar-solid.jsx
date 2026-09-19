import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ld0um9q-a.css';
import '../../css/h/h4mgjq2gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ld0um9q-a"/><path class="h4mgjq2gr"/></g>`,
		"fallback": "flowbite:open-sidebar-solid",
	});
}

export default Component;
