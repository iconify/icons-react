import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sigwjym5j.css';
import '../../css/v/v3uxt4bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sigwjym5j"/><path class="v3uxt4bgm"/></g>`,
		"fallback": "coolicons:virus-duocolor-round",
	});
}

export default Component;
