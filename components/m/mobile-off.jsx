import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q109bpb0d.css';
import '../../css/p/p_fykdbnn.css';
import '../../css/m/mmqs85bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q109bpb0d"/><path clip-rule="evenodd" class="p_fykdbnn"/><path class="mmqs85bbr"/></g>`,
		"fallback": "reicon:mobile-off",
	});
}

export default Component;
