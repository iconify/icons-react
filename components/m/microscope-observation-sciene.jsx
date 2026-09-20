import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/az-sp5mlu.css';
import '../../css/j/jhuh8jbcn.css';
import '../../css/b/b076blkjl.css';
import '../../css/d/d3ie46nxk.css';
import '../../css/n/nvk58zbfu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="az-sp5mlu"/><path class="jhuh8jbcn"/><path class="b076blkjl"/><path class="d3ie46nxk"/><path class="nvk58zbfu"/></g>`,
		"fallback": "streamline-flex:microscope-observation-sciene",
	});
}

export default Component;
