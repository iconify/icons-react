import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ydewsccpi.css';
import '../../css/s/suj4n5bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ydewsccpi"/><path class="suj4n5bih"/></g>`,
		"fallback": "keyline-icons:language-two-tone",
	});
}

export default Component;
