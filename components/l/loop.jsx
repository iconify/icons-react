import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gn5jjkgvg.css';
import '../../css/b/b8jffq-bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gn5jjkgvg"/><path class="b8jffq-bp"/></g>`,
		"fallback": "tabler:loop",
	});
}

export default Component;
