import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgy69obha.css';
import '../../css/c/ct6r-etpu.css';
import '../../css/x/xazkdubej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgy69obha"/><path class="ct6r-etpu"/><path class="xazkdubej"/>`,
		"fallback": "fxemoji:sliceofpizza",
	});
}

export default Component;
