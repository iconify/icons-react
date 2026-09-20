import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iig1kgbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iig1kgbsh"/>`,
		"fallback": "mdi:starburst-edit-outline",
	});
}

export default Component;
