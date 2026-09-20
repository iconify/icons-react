import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tv6p83bhq.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/v/vcx3fkrll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tv6p83bhq"/><path class="c_zdt_bqs"/><path class="vcx3fkrll"/></g>`,
		"fallback": "solar:user-minus-rounded-bold-duotone",
	});
}

export default Component;
