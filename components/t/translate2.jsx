import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/parj1ac3o.css';
import '../../css/d/d0i3ffawj.css';
import '../../css/l/l10rdjyqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="parj1ac3o"/><path class="d0i3ffawj"/><path clip-rule="evenodd" class="l10rdjyqp"/></g>`,
		"fallback": "reicon:translate2",
	});
}

export default Component;
