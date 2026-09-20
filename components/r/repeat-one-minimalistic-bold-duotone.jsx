import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iz7pr1buf.css';
import '../../css/e/evitbbbdh.css';
import '../../css/w/wq_plobpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iz7pr1buf"/><path clip-rule="evenodd" class="evitbbbdh"/><path class="wq_plobpx"/></g>`,
		"fallback": "solar:repeat-one-minimalistic-bold-duotone",
	});
}

export default Component;
