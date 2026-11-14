import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mq7vjg_im.css';
import '../../css/u/u4pzbqbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mq7vjg_im"/><path class="u4pzbqbcg"/></g>`,
		"fallback": "codex:trending-down",
	});
}

export default Component;
