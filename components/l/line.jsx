import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q21hny20d.css';
import '../../css/m/mcr7zubuf.css';
import '../../css/s/s0l0zu_qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q21hny20d"/><path class="mcr7zubuf"/><path class="s0l0zu_qn"/>`,
		"fallback": "uim:line",
	});
}

export default Component;
