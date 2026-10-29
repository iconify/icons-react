import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p56cd0qcu.css';
import '../../css/j/jmr4532dm.css';
import '../../css/r/r8do_0btb.css';
import '../../css/f/fl6pd1bai.css';
import '../../css/n/n3ix_694b.css';
import '../../css/z/zs7xx9htg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p56cd0qcu wm-k"/><path class="jmr4532dm wm-k"/><path class="r8do_0btb wm-k"/><path class="fl6pd1bai wm-k"/><path class="n3ix_694b wm-shine"/><path class="wm-a zs7xx9htg"/></g>`,
		"fallback": "withicons-anime:mountain-snow",
	});
}

export default Component;
