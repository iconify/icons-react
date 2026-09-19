import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pihk1kufz.css';
import '../../css/n/n9_obdcgu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pihk1kufz"/><path class="n9_obdcgu"/>`,
		"fallback": "ei:link",
	});
}

export default Component;
