import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ziw94-bib.css';
import '../../css/t/tny3jdsxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ziw94-bib"/><path class="tny3jdsxu"/></g>`,
		"fallback": "pixelarticons:open-sharp",
	});
}

export default Component;
