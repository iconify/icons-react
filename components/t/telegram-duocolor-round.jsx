import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quub31myw.css';
import '../../css/h/hb1ohtb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="quub31myw"/><path class="hb1ohtb0a"/></g>`,
		"fallback": "coolicons:telegram-duocolor-round",
	});
}

export default Component;
