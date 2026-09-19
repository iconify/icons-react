import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxln9bcuq.css';
import '../../css/g/gcac09b7g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxln9bcuq"/><path class="gcac09b7g"/>`,
		"fallback": "devicon:typo3-wordmark",
	});
}

export default Component;
