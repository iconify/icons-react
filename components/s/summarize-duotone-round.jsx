import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx96ezm1j.css';
import '../../css/n/nvxcg0e7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yx96ezm1j"/><path class="nvxcg0e7v"/></g>`,
		"fallback": "coolicons:summarize-duotone-round",
	});
}

export default Component;
