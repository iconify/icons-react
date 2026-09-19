import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/i/iimhfp_bg.css';
import '../../css/x/x92qun6vf.css';
import '../../css/z/zx2accbtj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="iimhfp_bg"/><path class="x92qun6vf"/><path class="zx2accbtj"/></g>`,
		"fallback": "icon-park-solid:spinning-top",
	});
}

export default Component;
