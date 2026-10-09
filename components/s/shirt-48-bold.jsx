import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiosb2sjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiosb2sjk"/>`,
		"fallback": "energy-icons:shirt-48-bold",
	});
}

export default Component;
