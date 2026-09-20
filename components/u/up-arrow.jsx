import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp-6ebbmc.css';
import '../../css/l/ljs5lpfqk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp-6ebbmc"/><path class="ljs5lpfqk"/>`,
		"fallback": "openmoji:up-arrow",
	});
}

export default Component;
