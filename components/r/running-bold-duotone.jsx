import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chyhxdobm.css';
import '../../css/l/lm-oqdusd.css';
import '../../css/t/twmpajbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chyhxdobm"/><path clip-rule="evenodd" class="lm-oqdusd"/><path class="twmpajbfc"/></g>`,
		"fallback": "solar:running-bold-duotone",
	});
}

export default Component;
