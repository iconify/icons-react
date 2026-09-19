import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lcttltb3x.css';
import '../../css/x/x_cl_fbwy.css';
import '../../css/c/ccyq18bpb.css';
import '../../css/r/rlvqv6btf.css';
import '../../css/y/yw8zjyc1i.css';
import '../../css/o/o5e6ye6gk.css';
import '../../css/c/c6dpl4bdq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="lcttltb3x"/><path class="x_cl_fbwy"/><path class="ccyq18bpb"/><path class="rlvqv6btf"/><path class="yw8zjyc1i"/><path class="o5e6ye6gk"/><path class="c6dpl4bdq"/></g>`,
		"fallback": "icon-park:notebook",
	});
}

export default Component;
