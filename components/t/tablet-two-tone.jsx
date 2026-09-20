import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gvz35xuyy.css';
import '../../css/q/q8edpacfm.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gvz35xuyy"/><path class="q8edpacfm"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-two-tone",
	});
}

export default Component;
