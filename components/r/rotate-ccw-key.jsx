import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egxa_x5_h.css';
import '../../css/y/yyswytbkd.css';
import '../../css/j/jsnbs5b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="egxa_x5_h"/><path class="yyswytbkd"/><circle class="jsnbs5b6g"/></g>`,
		"fallback": "lucide:rotate-ccw-key",
	});
}

export default Component;
