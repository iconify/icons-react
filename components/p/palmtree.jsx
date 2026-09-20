import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lcy49hbsj.css';
import '../../css/l/la3cfh-xa.css';
import '../../css/k/k2o7mkbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lcy49hbsj"/><path class="la3cfh-xa"/><path class="k2o7mkbwh"/></g>`,
		"fallback": "lucide:palmtree",
	});
}

export default Component;
