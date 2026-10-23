import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vsmlinbvn.css';
import '../../css/h/hlhppkbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vsmlinbvn"/><path class="hlhppkbrm"/></g>`,
		"fallback": "vadivam:lock-keyhole",
	});
}

export default Component;
