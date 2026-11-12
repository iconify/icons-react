import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-vsxb4f.css';
import '../../css/y/ywt6ec0ao.css';
import '../../css/n/n8kwb1zdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-vsxb4f"/><path class="ywt6ec0ao"/><path class="n8kwb1zdl"/>`,
		"fallback": "selfhst:rhel-light",
	});
}

export default Component;
