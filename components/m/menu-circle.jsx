import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/y/yt0p5x-rb.css';
import '../../css/l/lasjp3bld.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="yt0p5x-rb"/><path class="lasjp3bld"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:menu-circle",
	});
}

export default Component;
