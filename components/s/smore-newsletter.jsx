import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oto715bfm.css';
import '../../css/g/gnj61ac6v.css';
import '../../css/o/orctz5b3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oto715bfm"/><path class="gnj61ac6v"/><path class="orctz5b3e"/>`,
		"fallback": "selfhst:smore-newsletter",
	});
}

export default Component;
