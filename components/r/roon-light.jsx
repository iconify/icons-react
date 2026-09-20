import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anb_2obmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anb_2obmq"/>`,
		"fallback": "selfhst:roon-light",
	});
}

export default Component;
