import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yge3d9bpf.css';
import '../../css/y/y5pevlgfj.css';
import '../../css/b/bkgm8ccsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yge3d9bpf"/><path class="y5pevlgfj"/><path class="bkgm8ccsn"/></g>`,
		"fallback": "streamline-sharp-color:user-head-focus",
	});
}

export default Component;
