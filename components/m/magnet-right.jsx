import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah__qkbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah__qkbel"/>`,
		"fallback": "mage:magnet-right",
	});
}

export default Component;
