import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt9ppcjum.css';
import '../../css/a/au4zb9b5u.css';
import '../../css/z/zeq616bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt9ppcjum"/><path class="au4zb9b5u"/><path class="zeq616bts"/>`,
		"fallback": "selfhst:invoiceplane-dark",
	});
}

export default Component;
