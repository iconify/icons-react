import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_e628bht.css';
import '../../css/m/md286fbip.css';
import '../../css/e/eoq7jqbkh.css';
import '../../css/u/uqman41yd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a_e628bht"/><g class="md286fbip"><path class="eoq7jqbkh"/><path class="uqman41yd"/></g></g>`,
		"fallback": "cryptocurrency-color:knc",
	});
}

export default Component;
