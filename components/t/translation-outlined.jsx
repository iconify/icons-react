import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwna3ebpo.css';
import '../../css/v/vfiksfbii.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwna3ebpo"/><path class="vfiksfbii"/>`,
		"fallback": "ant-design:translation-outlined",
	});
}

export default Component;
