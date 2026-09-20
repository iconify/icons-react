import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk-_uab5y.css';
import '../../css/q/qg31fgbey.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk-_uab5y"/><circle class="qg31fgbey"/>`,
		"fallback": "nimbus:obelisk",
	});
}

export default Component;
