import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akblwld7m.css';
import '../../css/e/eh3oe3bws.css';
import '../../css/l/lspatcbsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akblwld7m"/><path class="eh3oe3bws"/><path class="lspatcbsm"/>`,
		"fallback": "selfhst:ksuite-chk-dark",
	});
}

export default Component;
