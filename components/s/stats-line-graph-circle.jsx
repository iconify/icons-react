import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4c6lqbbt.css';
import '../../css/c/cvtxclbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4c6lqbbt"/><path class="cvtxclbmf"/>`,
		"fallback": "streamline-freehand:stats-line-graph-circle",
	});
}

export default Component;
