import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/a9vsgkbga.css';
import '../../css/g/ghufp1bsu.css';
import '../../css/r/rr_rycfur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="a9vsgkbga"/><circle class="ghufp1bsu"/><path class="rr_rycfur"/></g>`,
		"fallback": "lets-icons:package-car",
	});
}

export default Component;
