import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nskmalzgz.css';
import '../../css/k/khw_e2oxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nskmalzgz"/><path class="khw_e2oxb"/>`,
		"fallback": "pixel:side-nav-expand",
	});
}

export default Component;
