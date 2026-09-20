import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s05kiwb2w.css';
import '../../css/q/q96rhebcu.css';
import '../../css/o/o0pfhwbdc.css';
import '../../css/g/gq-pfyb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s05kiwb2w"/><path class="q96rhebcu"/><path class="o0pfhwbdc"/><path clip-rule="evenodd" class="gq-pfyb5y"/></g>`,
		"fallback": "solar:skateboarding-round-outline",
	});
}

export default Component;
