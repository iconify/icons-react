import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4tifnsbw.css';
import '../../css/f/f0xfgyz3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o4tifnsbw"/><path class="f0xfgyz3v"/></g>`,
		"fallback": "keyline-icons:share-duotone",
	});
}

export default Component;
