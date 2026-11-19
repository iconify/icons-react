import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lautcmbvg.css';
import '../../css/f/fjfrqq7go.css';
import '../../css/a/aflsk-a2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lautcmbvg"/><path class="fjfrqq7go"/><path class="aflsk-a2u"/></g>`,
		"fallback": "andrsrxn:sd-card-warning",
	});
}

export default Component;
