import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xz0tm-ban.css';
import '../../css/n/no9e52b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xz0tm-ban"/><path class="no9e52b3o"/></g>`,
		"fallback": "hugeicons:notification-bubble",
	});
}

export default Component;
