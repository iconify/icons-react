import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8ysor64h.css';
import '../../css/g/g2jm0o7ox.css';
import '../../css/m/mfousvcdk.css';
import '../../css/v/vpxodfbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8ysor64h"/><path class="g2jm0o7ox"/><path class="mfousvcdk"/><path class="vpxodfbyq"/></g>`,
		"fallback": "reicon:magnet-wave-duotone",
	});
}

export default Component;
