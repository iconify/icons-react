import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/btd48x3sg.css';
import '../../css/k/kylvk9lcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="btd48x3sg"/><path class="kylvk9lcu"/></g>`,
		"fallback": "hugeicons:menu-restaurant",
	});
}

export default Component;
