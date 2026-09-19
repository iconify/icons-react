import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddyhzzb2r.css';
import '../../css/n/nxyvj7hbk.css';
import '../../css/t/toe-c6b0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ddyhzzb2r"/><path class="nxyvj7hbk"/><path class="toe-c6b0o"/></g>`,
		"fallback": "at-icons:sea",
	});
}

export default Component;
