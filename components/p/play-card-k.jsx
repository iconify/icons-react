import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sahxeu2jb.css';
import '../../css/q/qxbhs7gcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sahxeu2jb"/><path class="qxbhs7gcw"/></g>`,
		"fallback": "tabler:play-card-k",
	});
}

export default Component;
