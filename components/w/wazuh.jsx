import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he3q-t8yh.css';
import '../../css/a/atcx61-tl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he3q-t8yh"/><circle class="atcx61-tl"/>`,
		"fallback": "selfhst:wazuh",
	});
}

export default Component;
