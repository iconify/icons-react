import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6yoqshmw.css';
import '../../css/z/z_e2vybpv.css';
import '../../css/g/g1_c90b_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6yoqshmw"/><path class="z_e2vybpv"/><path class="g1_c90b_m"/>`,
		"fallback": "material-icon-theme:puppet",
	});
}

export default Component;
