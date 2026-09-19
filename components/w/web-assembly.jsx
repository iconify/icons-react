import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/b/bys5gtajl.css';
import '../../css/m/ms4qewg_b.css';
import '../../css/v/vdav4blva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="bys5gtajl"/><path class="ms4qewg_b"/><path class="vdav4blva"/></g>`,
		"fallback": "catppuccin:web-assembly",
	});
}

export default Component;
