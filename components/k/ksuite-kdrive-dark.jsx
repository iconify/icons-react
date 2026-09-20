import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p00s6tbuj.css';
import '../../css/f/fv_cpccws.css';
import '../../css/n/n3b691blg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p00s6tbuj"/><path class="fv_cpccws"/><path class="n3b691blg"/>`,
		"fallback": "selfhst:ksuite-kdrive-dark",
	});
}

export default Component;
