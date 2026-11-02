import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gzs_0bb9p.css';
import '../../css/i/i1hguobkj.css';
import '../../css/m/m2n6x-vsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gzs_0bb9p"/><path class="i1hguobkj"/><path class="m2n6x-vsu"/></g>`,
		"fallback": "matita:surprised",
	});
}

export default Component;
