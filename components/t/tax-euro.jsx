import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nkqus69ar.css';
import '../../css/m/mketp7bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nkqus69ar"/><path class="mketp7bns"/></g>`,
		"fallback": "tabler:tax-euro",
	});
}

export default Component;
