import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gv2jrdtmw.css';
import '../../css/v/v3unlcbeb.css';
import '../../css/s/spugqyaae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gv2jrdtmw"/><path class="v3unlcbeb"/><path class="spugqyaae"/></g>`,
		"fallback": "keyline-icons:sun-dim-two-tone",
	});
}

export default Component;
