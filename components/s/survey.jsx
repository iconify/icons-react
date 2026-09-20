import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs37-c-kd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs37-c-kd"/>`,
		"fallback": "wpf:survey",
	});
}

export default Component;
