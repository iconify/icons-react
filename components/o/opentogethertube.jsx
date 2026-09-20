import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9sl7lbit.css';
import '../../css/x/x7rph2bhw.css';
import '../../css/t/tx-4f1bjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9sl7lbit"/><path class="x7rph2bhw"/><path class="tx-4f1bjp"/>`,
		"fallback": "selfhst:opentogethertube",
	});
}

export default Component;
