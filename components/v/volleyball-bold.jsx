import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re74k8eaa.css';
import '../../css/n/nquug4bon.css';
import '../../css/d/dh1if8bzc.css';
import '../../css/z/zlv857b-x.css';
import '../../css/l/l662jhb3d.css';
import '../../css/j/j8blkxn0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re74k8eaa"/><path class="nquug4bon"/><path class="dh1if8bzc"/><path class="zlv857b-x"/><path class="l662jhb3d"/><path class="j8blkxn0m"/>`,
		"fallback": "solar:volleyball-bold",
	});
}

export default Component;
