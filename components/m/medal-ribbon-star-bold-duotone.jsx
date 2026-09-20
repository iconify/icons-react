import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6twldbvw.css';
import '../../css/t/tvzvjibbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n6twldbvw"/><path class="tvzvjibbh"/></g>`,
		"fallback": "solar:medal-ribbon-star-bold-duotone",
	});
}

export default Component;
