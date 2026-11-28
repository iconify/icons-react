import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4-hdabus.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ag1j6_bzf.css';
import '../../css/u/u-8x-3bpu.css';
import '../../css/m/mtd7yhr0o.css';
import '../../css/a/a6zgemb3a.css';
import '../../css/z/zb63svr9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u4-hdabus"/><g class="dt0cm9dhy primary"><path class="ag1j6_bzf"/><path class="u-8x-3bpu"/><path class="mtd7yhr0o"/><path class="a6zgemb3a"/><path class="zb63svr9r"/></g>`,
		"fallback": "iconaut:nightstand-duo",
	});
}

export default Component;
