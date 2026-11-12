import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du0fstbco.css';
import '../../css/d/da5se5sef.css';
import '../../css/m/mle8vwbkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du0fstbco"/><path class="da5se5sef"/><path class="mle8vwbkd"/>`,
		"fallback": "selfhst:ipfs-dark",
	});
}

export default Component;
