import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0gx-2k1c.css';
import '../../css/s/slvmq7bsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k0gx-2k1c"/><path clip-rule="evenodd" class="slvmq7bsy"/>`,
		"fallback": "selfhst:pinepods-light",
	});
}

export default Component;
