import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xutqjtbzv.css';
import '../../css/n/ngkwocppj.css';
import '../../css/g/gll9pmo4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xutqjtbzv"/><path class="ngkwocppj"/><path class="gll9pmo4p"/></g>`,
		"fallback": "matita:layers",
	});
}

export default Component;
