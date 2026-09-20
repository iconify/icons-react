import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf-ixubsz.css';
import '../../css/r/r8xkjtbka.css';
import '../../css/p/pnqtkcbha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf-ixubsz"/><path class="r8xkjtbka"/><path class="pnqtkcbha"/>`,
		"fallback": "selfhst:stackspin",
	});
}

export default Component;
