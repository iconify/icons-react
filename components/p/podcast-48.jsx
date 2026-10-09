import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/matvajbjh.css';
import '../../css/u/u2t84ywhz.css';
import '../../css/e/e1el_7bsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="matvajbjh"/><path class="u2t84ywhz"/><path class="e1el_7bsb"/>`,
		"fallback": "energy-icons:podcast-48",
	});
}

export default Component;
