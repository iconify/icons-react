import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-nbhkb5o.css';
import '../../css/q/qadfuab-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t-nbhkb5o"/><path class="qadfuab-z"/></g>`,
		"fallback": "coolicons:layout-bento-duocolor-round",
	});
}

export default Component;
