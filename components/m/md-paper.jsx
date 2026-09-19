import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmtkp5byu.css';
import '../../css/j/jyj0czf8z.css';
import '../../css/a/a4_yhfdzc.css';
import '../../css/d/du2o76hwu.css';
import '../../css/r/rzbq2ac6y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmtkp5byu"/><path class="jyj0czf8z"/><path class="a4_yhfdzc"/><path class="du2o76hwu"/><path class="rzbq2ac6y"/>`,
		"fallback": "ion:md-paper",
	});
}

export default Component;
