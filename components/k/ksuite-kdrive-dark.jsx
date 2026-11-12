import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukiwq4kfy.css';
import '../../css/v/vqwxhebmc.css';
import '../../css/n/n3b691blg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukiwq4kfy"/><path class="vqwxhebmc"/><path class="n3b691blg"/>`,
		"fallback": "selfhst:ksuite-kdrive-dark",
	});
}

export default Component;
