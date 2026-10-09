import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkihj-w6g.css';
import '../../css/c/ce_vlmbjr.css';
import '../../css/a/al014_b-b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkihj-w6g"/><path class="ce_vlmbjr"/><path class="al014_b-b"/>`,
		"fallback": "energy-icons:shield-x-20",
	});
}

export default Component;
