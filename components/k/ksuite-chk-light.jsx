import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vavo9cr_j.css';
import '../../css/i/ig82nms2n.css';
import '../../css/x/xj6r9dbct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vavo9cr_j"/><path class="ig82nms2n"/><path class="xj6r9dbct"/>`,
		"fallback": "selfhst:ksuite-chk-light",
	});
}

export default Component;
