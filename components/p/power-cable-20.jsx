import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx3ng-mzk.css';
import '../../css/y/y8c1zsvzo.css';
import '../../css/z/zc3xw3bax.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx3ng-mzk"/><path class="y8c1zsvzo"/><path class="zc3xw3bax"/>`,
		"fallback": "energy-icons:power-cable-20",
	});
}

export default Component;
