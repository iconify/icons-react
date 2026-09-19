import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v71jupb4f.css';
import '../../css/l/lfeo2hbff.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v71jupb4f"/><path class="lfeo2hbff"/></g>`,
		"fallback": "et:newspaper",
	});
}

export default Component;
