import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zsd42j9js.css';
import '../../css/v/vco3hvbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zsd42j9js"/><path class="vco3hvbdw"/></g>`,
		"fallback": "coolicons:user-alt-duocolor-round",
	});
}

export default Component;
