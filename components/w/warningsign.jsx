import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeh6a5f4t.css';
import '../../css/a/anpcbdbzt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeh6a5f4t"/><path class="anpcbdbzt"/>`,
		"fallback": "fxemoji:warningsign",
	});
}

export default Component;
