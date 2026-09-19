import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li_aurb-v.css';
import '../../css/q/qv-j8ebyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li_aurb-v"/><path class="qv-j8ebyv"/>`,
		"fallback": "ion:ios-card",
	});
}

export default Component;
