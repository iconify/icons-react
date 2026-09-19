import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2cbsiiy.css';
import '../../css/u/us9oalb-g.css';
import '../../css/n/n2o677b8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2cbsiiy"/><path class="us9oalb-g"/><path class="n2o677b8q"/>`,
		"fallback": "cil:router",
	});
}

export default Component;
