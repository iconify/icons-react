import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c48h8177s.css';
import '../../css/n/ncqde4bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c48h8177s"/><path class="ncqde4bll"/></g>`,
		"fallback": "coolicons:settings-duocolor-round",
	});
}

export default Component;
