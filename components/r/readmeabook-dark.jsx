import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1rbdisyq.css';
import '../../css/f/frpnumb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1rbdisyq"/><path class="frpnumb_a"/>`,
		"fallback": "selfhst:readmeabook-dark",
	});
}

export default Component;
