import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrxewtok.css';
import '../../css/i/iw0mf28vs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrxewtok"/><path class="iw0mf28vs"/>`,
		"fallback": "selfhst:kherad",
	});
}

export default Component;
