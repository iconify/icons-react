import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sglzdsb2k.css';
import '../../css/v/v56b0gb0z.css';
import '../../css/t/tc0p7nbfc.css';
import '../../css/x/x35pf_uyj.css';
import '../../css/a/az-55ob-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sglzdsb2k wm-shadow"/><path class="v56b0gb0z"/><path class="tc0p7nbfc"/><path class="x35pf_uyj"/><path class="az-55ob-q"/></g>`,
		"fallback": "withicons-retro:peacock-feather",
	});
}

export default Component;
