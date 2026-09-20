import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b406pbbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b406pbbaz"/>`,
		"fallback": "mage:magnet-right-fill",
	});
}

export default Component;
