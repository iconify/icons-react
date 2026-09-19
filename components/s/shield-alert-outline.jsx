import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5xe9ybcw.css';
import '../../css/c/cuogirb-s.css';
import '../../css/a/aln2yuqeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="shield-alert-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="m5xe9ybcw"/><path clip-rule="evenodd" class="cuogirb-s"/><path class="aln2yuqeg"/></g></g>`,
		"fallback": "cuida:shield-alert-outline",
	});
}

export default Component;
