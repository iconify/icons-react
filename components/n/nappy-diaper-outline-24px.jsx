import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dy34skkvj.css';
import '../../css/b/blgg_0kdx.css';
import '../../css/s/sg0mjm65i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dy34skkvj"/><path clip-rule="evenodd" class="blgg_0kdx"/><path class="sg0mjm65i"/></g>`,
		"fallback": "healthicons:nappy-diaper-outline-24px",
	});
}

export default Component;
