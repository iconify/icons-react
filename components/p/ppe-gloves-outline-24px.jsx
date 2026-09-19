import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ltvjo-bqq.css';
import '../../css/i/ivv_muoqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ltvjo-bqq"/><path class="ivv_muoqa"/></g>`,
		"fallback": "healthicons:ppe-gloves-outline-24px",
	});
}

export default Component;
