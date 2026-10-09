import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8sj0bbsc.css';
import '../../css/c/c75q7gbnf.css';
import '../../css/e/ezx2ctbsk.css';
import '../../css/z/z6thc6b1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8sj0bbsc"/><path class="c75q7gbnf"/><path class="ezx2ctbsk"/><path class="z6thc6b1y"/>`,
		"fallback": "energy-icons:mic-48",
	});
}

export default Component;
