import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn3dqubvj.css';
import '../../css/u/uyd1zou_s.css';
import '../../css/o/owyw74eao.css';
import '../../css/s/sg2ufph9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn3dqubvj"/><path class="uyd1zou_s"/><path class="owyw74eao"/><path class="sg2ufph9x"/></g>`,
		"fallback": "solar:trash-bin-trash-bold-duotone",
	});
}

export default Component;
