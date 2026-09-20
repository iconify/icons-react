import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quim4nbfq.css';
import '../../css/t/tlxfihr8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quim4nbfq"/><path class="tlxfihr8o"/>`,
		"fallback": "selfhst:netonnet",
	});
}

export default Component;
