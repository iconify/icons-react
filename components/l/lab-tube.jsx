import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng0uelbxk.css';
import '../../css/y/yw36igb2b.css';
import '../../css/q/qel5tnvvk.css';
import '../../css/w/wnk9nabrt.css';
import '../../css/z/z_1y867bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ng0uelbxk"/><path class="yw36igb2b"/><path class="qel5tnvvk"/><path class="wnk9nabrt"/><path class="z_1y867bm"/></g>`,
		"fallback": "streamline-ultimate-color:lab-tube",
	});
}

export default Component;
