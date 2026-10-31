import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o-6y3gb7l.css';
import '../../css/q/qif4lkbqe.css';
import '../../css/l/l4ffudb4p.css';
import '../../css/n/nboiatbai.css';
import '../../css/s/s6hztnhpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o-6y3gb7l"/><path class="qif4lkbqe wm-shine"/><path class="l4ffudb4p wm-k"/><path class="nboiatbai wm-a"/><path class="s6hztnhpp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:telescope",
	});
}

export default Component;
