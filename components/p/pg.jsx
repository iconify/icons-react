import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-9_rj_3o.css';
import '../../css/m/mmz906u-j.css';
import '../../css/d/dedmydhnx.css';
import '../../css/h/hsm38cqxa.css';

const viewBox = {"width":301,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-9_rj_3o"/><path class="mmz906u-j"/><path class="dedmydhnx"/><path class="hsm38cqxa"/></g>`,
		"fallback": "cif:pg",
	});
}

export default Component;
