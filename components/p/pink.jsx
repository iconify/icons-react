import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uj2u_c8xe.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/xln0-bxve.css';
import '../../css/h/hoffup77e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="uj2u_c8xe"/><g class="n1mjunbsu"><path class="xln0-bxve"/><path class="hoffup77e"/></g></g>`,
		"fallback": "cryptocurrency-color:pink",
	});
}

export default Component;
