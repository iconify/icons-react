import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l_1pw147n.css';
import '../../css/i/iuvffbbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l_1pw147n"/><path class="iuvffbbaz"/></g>`,
		"fallback": "tabler:sticker",
	});
}

export default Component;
