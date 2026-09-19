import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abymrkbhu.css';
import '../../css/x/xgzb2ecbf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="abymrkbhu"/><path class="xgzb2ecbf"/></g>`,
		"fallback": "glyphs-poly:pin-1",
	});
}

export default Component;
