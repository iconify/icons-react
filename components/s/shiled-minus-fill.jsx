import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecb83qb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecb83qb3v"/>`,
		"fallback": "mage:shiled-minus-fill",
	});
}

export default Component;
