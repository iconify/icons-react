import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh68rnblk.css';
import '../../css/g/g45mtmdnj.css';
import '../../css/t/tcccckbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qh68rnblk"/><path class="g45mtmdnj"/><path class="tcccckbck"/></g>`,
		"fallback": "iconamoon:like-duotone",
	});
}

export default Component;
