import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq9_gaclr.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/k/kpnimx1ru.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dq9_gaclr"/><circle class="e39ud6bwf"/><circle class="kpnimx1ru"/>`,
		"fallback": "carbon:overflow-menu-horizontal",
	});
}

export default Component;
