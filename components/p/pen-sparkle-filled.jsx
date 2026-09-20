import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twpulwdgq.css';
import '../../css/g/gao_k8b0n.css';
import '../../css/c/cd5gr7bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twpulwdgq"/><circle class="gao_k8b0n"/><path class="cd5gr7bnq"/></g>`,
		"fallback": "reicon:pen-sparkle-filled",
	});
}

export default Component;
