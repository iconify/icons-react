import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri_2t2kgv.css';
import '../../css/w/w9r2jnnqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri_2t2kgv"/><path class="w9r2jnnqe"/>`,
		"fallback": "fxemoji:twospeechbubbles",
	});
}

export default Component;
