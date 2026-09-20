import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kuw88bb_z.css';
import '../../css/o/oc0ue9hxo.css';
import '../../css/p/pddzioqkw.css';
import '../../css/p/p5wgn4bss.css';
import '../../css/r/rx7dr45fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kuw88bb_z"/><path class="oc0ue9hxo"/><path class="pddzioqkw"/><path class="p5wgn4bss"/><path class="rx7dr45fj"/></g>`,
		"fallback": "streamline-sharp-color:watch-square-time",
	});
}

export default Component;
