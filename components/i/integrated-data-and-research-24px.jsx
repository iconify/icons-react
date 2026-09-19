import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjv0s75cj.css';
import '../../css/j/jx1h125ko.css';
import '../../css/i/ia9fiz6uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cjv0s75cj"/><path clip-rule="evenodd" class="jx1h125ko"/><path class="ia9fiz6uq"/></g>`,
		"fallback": "healthicons:integrated-data-and-research-24px",
	});
}

export default Component;
