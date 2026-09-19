import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynzxo5bdj.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynzxo5bdj"/>`,
		"fallback": "fontisto:user-secret",
	});
}

export default Component;
