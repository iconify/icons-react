import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byucpnmmz.css';
import '../../css/c/cti5c-blj.css';
import '../../css/x/x_rnm4jqh.css';
import '../../css/u/uqt5dz12r.css';
import '../../css/w/wkba3hber.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byucpnmmz"/><path class="cti5c-blj"/><path class="x_rnm4jqh"/><path class="uqt5dz12r"/><path class="wkba3hber"/>`,
		"fallback": "openmoji:leafy-green",
	});
}

export default Component;
