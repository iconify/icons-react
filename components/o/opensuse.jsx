import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydrht2b5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydrht2b5s"/>`,
		"fallback": "cib:opensuse",
	});
}

export default Component;
