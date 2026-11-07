import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exl39kb_y.css';
import '../../css/y/yoytqz1kl.css';
import '../../css/f/fuor2f7ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exl39kb_y"/><path class="yoytqz1kl"/><path class="fuor2f7ck"/>`,
		"fallback": "solar:umbrella-bold-duotone",
	});
}

export default Component;
