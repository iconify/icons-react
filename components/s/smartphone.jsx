import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euvm4m4yy.css';
import '../../css/d/d7eb7bjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer euvm4m4yy"/><path class="d7eb7bjvg duoicon-primary-layer"/>`,
		"fallback": "duo-icons:smartphone",
	});
}

export default Component;
