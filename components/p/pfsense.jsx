import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6ad7xqxj.css';
import '../../css/p/p7e-r07_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6ad7xqxj"/><path class="p7e-r07_d"/>`,
		"fallback": "selfhst:pfsense",
	});
}

export default Component;
