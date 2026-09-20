import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be-q5ibtf.css';
import '../../css/o/oe3dp0-yz.css';
import '../../css/x/xsj4v2blh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be-q5ibtf"/><path class="oe3dp0-yz"/><path class="xsj4v2blh"/>`,
		"fallback": "selfhst:stirling-pdf",
	});
}

export default Component;
