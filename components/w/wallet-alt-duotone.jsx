import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_xqph0yx.css';
import '../../css/c/clz-rp4dm.css';
import '../../css/b/by7c5-bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_xqph0yx"/><path class="clz-rp4dm"/><rect class="by7c5-bab"/>`,
		"fallback": "lets-icons:wallet-alt-duotone",
	});
}

export default Component;
