import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vls00lb0t.css';
import '../../css/d/d43mkbclq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vls00lb0t"/><path class="d43mkbclq wm-a"/></g>`,
		"fallback": "withicons:swords-solid",
	});
}

export default Component;
