import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tb_h7bczg.css';
import '../../css/d/dmhxdlbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tb_h7bczg"/><path class="dmhxdlbmv"/></g>`,
		"fallback": "tabler:settings-spark",
	});
}

export default Component;
