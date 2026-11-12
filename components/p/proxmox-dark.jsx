import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5wjfbclw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5wjfbclw"/>`,
		"fallback": "selfhst:proxmox-dark",
	});
}

export default Component;
