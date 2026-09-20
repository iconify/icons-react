import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oomezrlgn.css';
import '../../css/q/q95dfl5vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oomezrlgn"/><path class="q95dfl5vo"/></g>`,
		"fallback": "tabler:play-card-7",
	});
}

export default Component;
