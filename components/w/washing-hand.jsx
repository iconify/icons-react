import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j1l7hc_-g.css';
import '../../css/o/oarp3cbgj.css';
import '../../css/o/oudat8b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j1l7hc_-g"/><path class="oarp3cbgj"/><path class="oudat8b8q"/></g>`,
		"fallback": "streamline-ultimate:washing-hand",
	});
}

export default Component;
