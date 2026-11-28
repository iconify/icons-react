import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r43j8wu0k.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sdnn0rbfr.css';
import '../../css/q/qkgcgxv2f.css';
import '../../css/k/kdqnsi7wk.css';
import '../../css/q/qmeb7ubyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r43j8wu0k secondary"/><g class="dt0cm9dhy primary"><path class="sdnn0rbfr"/><path class="qkgcgxv2f"/><path class="kdqnsi7wk"/><path class="qmeb7ubyc"/></g>`,
		"fallback": "iconaut:layout-grid-duo",
	});
}

export default Component;
