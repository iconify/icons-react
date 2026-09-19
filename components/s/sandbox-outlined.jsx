import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mopdhnbdd.css';
import '../../css/m/ml6irbcyc.css';
import '../../css/j/j2yb1ab3d.css';
import '../../css/k/kyo440vyg.css';
import '../../css/c/cf1mp-bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mopdhnbdd"/><path class="ml6irbcyc"/><path class="j2yb1ab3d"/><path class="kyo440vyg"/><circle class="cf1mp-bbw"/>`,
		"fallback": "eos-icons:sandbox-outlined",
	});
}

export default Component;
