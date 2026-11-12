import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/legs_-oed.css';
import '../../css/n/ny5b9ebqn.css';
import '../../css/n/n7g6991ym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="legs_-oed"/><path class="ny5b9ebqn"/><path class="n7g6991ym"/>`,
		"fallback": "selfhst:ksuite-swisstransfer-dark",
	});
}

export default Component;
