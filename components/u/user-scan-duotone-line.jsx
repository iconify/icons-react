import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/s/sq-5_fmts.css';
import '../../css/f/f3ydh4-xk.css';
import '../../css/b/b0ugci2cd.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGy0n0vefb"><g class="o58hkebvg"><path class="sq-5_fmts"/><path class="f3ydh4-xk"/><circle class="b0ugci2cd"/></g></mask></defs><path mask="url(#SVGy0n0vefb)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:user-scan-duotone-line",
	});
}

export default Component;
