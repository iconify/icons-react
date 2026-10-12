import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3d5jiygg.css';
import '../../css/v/vyitz_kgi.css';
import '../../css/y/ys7yq-5az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="t3d5jiygg"/><path class="vyitz_kgi"/><circle class="ys7yq-5az"/></g>`,
		"fallback": "andrsrxn:stethoscope",
	});
}

export default Component;
