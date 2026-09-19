import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sgb82cb7q.css';
import '../../css/o/oebz2gi6i.css';
import '../../css/l/lreh8ubkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sgb82cb7q"/><path class="oebz2gi6i"/><path class="lreh8ubkk"/></g>`,
		"fallback": "hugeicons:uber",
	});
}

export default Component;
