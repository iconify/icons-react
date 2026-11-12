import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqtotg3-l.css';
import '../../css/p/p9wzaub_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqtotg3-l"/><path class="p9wzaub_l"/>`,
		"fallback": "selfhst:t3-code",
	});
}

export default Component;
