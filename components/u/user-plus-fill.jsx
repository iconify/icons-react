import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o030v6xup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o030v6xup"/>`,
		"fallback": "mage:user-plus-fill",
	});
}

export default Component;
