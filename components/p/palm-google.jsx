import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aumw7gjtk.css';
import '../../css/v/vmgsxcbrd.css';
import '../../css/q/qw2avfbec.css';
import '../../css/f/f8ct0w4-p.css';
import '../../css/u/u6rdc5bjt.css';
import '../../css/y/y4q03jbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="aumw7gjtk"/><path class="vmgsxcbrd"/><path class="qw2avfbec"/><path class="f8ct0w4-p"/><path class="u6rdc5bjt"/><path class="y4q03jbai"/></g>`,
		"fallback": "thesvg:palm-google",
	});
}

export default Component;
