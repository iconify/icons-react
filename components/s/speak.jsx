import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo49c-7rn.css';
import '../../css/e/ev1e0nbdz.css';
import '../../css/y/yiwzwpb5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo49c-7rn"/><path class="ev1e0nbdz"/><path class="yiwzwpb5a"/>`,
		"fallback": "cil:speak",
	});
}

export default Component;
