import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw6_0n11d.css';
import '../../css/o/okn9x2b2j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw6_0n11d"/><path class="okn9x2b2j"/>`,
		"fallback": "devicon:vault-wordmark",
	});
}

export default Component;
