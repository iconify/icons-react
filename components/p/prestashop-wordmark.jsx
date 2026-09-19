import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzs9lxbeq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzs9lxbeq"/>`,
		"fallback": "devicon-plain:prestashop-wordmark",
	});
}

export default Component;
