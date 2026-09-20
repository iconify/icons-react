import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqm2mbh3a.css';
import '../../css/q/q1im91-dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqm2mbh3a"/><path class="q1im91-dp"/></g>`,
		"fallback": "tabler:trending-up-down",
	});
}

export default Component;
