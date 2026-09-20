import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da5r0yb7o.css';
import '../../css/z/zht-abauy.css';
import '../../css/l/lmc5hyb-n.css';

const viewBox = {"width":92,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGP3ZRwbKN"><rect class="da5r0yb7o"/></mask><g mask="url(#SVGP3ZRwbKN)"><path class="zht-abauy"/><path class="lmc5hyb-n"/></g>`,
		"fallback": "thesvg-color:mypy",
	});
}

export default Component;
