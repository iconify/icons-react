import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykqjh5npp.css';
import '../../css/t/tvigq4bta.css';
import '../../css/l/lspatcbsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykqjh5npp"/><path class="tvigq4bta"/><path class="lspatcbsm"/>`,
		"fallback": "selfhst:ksuite-chk-dark",
	});
}

export default Component;
