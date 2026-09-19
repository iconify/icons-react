import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvbc83s6y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvbc83s6y"/>`,
		"fallback": "fa7-brands:slack-hash",
	});
}

export default Component;
