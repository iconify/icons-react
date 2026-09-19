import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynacwacmn.css';
import '../../css/k/kmd5rqb-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynacwacmn"/><path class="kmd5rqb-k"/>`,
		"fallback": "ion:mail-open-outline",
	});
}

export default Component;
