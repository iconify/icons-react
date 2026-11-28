import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to7rc9brl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eitnl73xd.css';
import '../../css/m/mm2ep_xmq.css';
import '../../css/n/nzftghbcc.css';
import '../../css/f/f443avb-h.css';
import '../../css/o/oh3645bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary to7rc9brl"/><g class="dt0cm9dhy primary"><path class="eitnl73xd"/><path class="mm2ep_xmq"/><path class="nzftghbcc"/><path class="f443avb-h"/><path class="oh3645bzr"/></g>`,
		"fallback": "iconaut:microwave-duo",
	});
}

export default Component;
