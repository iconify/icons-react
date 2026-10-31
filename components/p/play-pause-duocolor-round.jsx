import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ktr2p3bbo.css';
import '../../css/l/le3yezbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ktr2p3bbo"/><path class="le3yezbmj"/></g>`,
		"fallback": "coolicons:play-pause-duocolor-round",
	});
}

export default Component;
