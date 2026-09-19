import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nrnj23b2p.css';
import '../../css/d/dyh94_bpj.css';
import '../../css/y/ydy2iebrd.css';
import '../../css/i/imvbfud-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nrnj23b2p"/><path clip-rule="evenodd" class="dyh94_bpj"/><path class="ydy2iebrd"/><path clip-rule="evenodd" class="imvbfud-d"/></g>`,
		"fallback": "healthicons:synergist-insecticide-bioassays2x-outline",
	});
}

export default Component;
