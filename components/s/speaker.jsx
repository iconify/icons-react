import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/m/mxvdyg8ma.css';
import '../../css/f/f0q_56b3q.css';
import '../../css/s/snu70y3dj.css';
import '../../css/j/jepmprb-w.css';
import '../../css/u/u4q7jrreg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="mxvdyg8ma"/><path class="f0q_56b3q"/><path class="snu70y3dj"/><path class="jepmprb-w"/><path class="u4q7jrreg"/></g>`,
		"fallback": "streamline-kameleon-color:speaker",
	});
}

export default Component;
