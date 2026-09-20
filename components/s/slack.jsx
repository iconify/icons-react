import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrwfaf3df.css';
import '../../css/z/zpp-6pm-i.css';
import '../../css/q/q4m0g8bzp.css';
import '../../css/x/xxqqfb5ec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrwfaf3df"/><path class="zpp-6pm-i"/><path class="q4m0g8bzp"/><path class="xxqqfb5ec"/>`,
		"fallback": "selfhst:slack",
	});
}

export default Component;
