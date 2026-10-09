import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1i2kqxtp.css';
import '../../css/z/zhydivsjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1i2kqxtp"/><path class="zhydivsjz"/>`,
		"fallback": "energy-icons:note-48",
	});
}

export default Component;
