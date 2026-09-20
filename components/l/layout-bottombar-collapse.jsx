import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy_lm7s2u.css';
import '../../css/u/u6zyydbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yy_lm7s2u"/><path class="u6zyydbfx"/></g>`,
		"fallback": "tabler:layout-bottombar-collapse",
	});
}

export default Component;
