import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lo2spemcq.css';
import '../../css/u/ughdv9bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lo2spemcq"/><path class="ughdv9bzg"/></g>`,
		"fallback": "coolicons:microphone-bulk-round",
	});
}

export default Component;
