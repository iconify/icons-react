import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tv09jwjac.css';
import '../../css/d/d_8oape8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tv09jwjac"/><path class="d_8oape8w"/></g>`,
		"fallback": "coolicons:podium-bulk-round",
	});
}

export default Component;
