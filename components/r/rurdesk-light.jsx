import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwwaekbrn.css';
import '../../css/a/a-4ue5bby.css';
import '../../css/t/tm45hz_di.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwwaekbrn"/><path class="a-4ue5bby"/><circle class="tm45hz_di"/>`,
		"fallback": "selfhst:rurdesk-light",
	});
}

export default Component;
