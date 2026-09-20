import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyucu1t5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyucu1t5r"/>`,
		"fallback": "selfhst:simplelogin-light",
	});
}

export default Component;
