import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt5up1vxc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt5up1vxc"/>`,
		"fallback": "carbon:software-resource-resource",
	});
}

export default Component;
