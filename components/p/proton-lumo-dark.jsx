import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lraiwvujr.css';
import '../../css/c/c97n50bhy.css';
import '../../css/w/w21c98bra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lraiwvujr"/><path class="c97n50bhy"/><path class="w21c98bra"/>`,
		"fallback": "selfhst:proton-lumo-dark",
	});
}

export default Component;
