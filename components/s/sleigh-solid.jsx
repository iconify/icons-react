import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcsa_x5rg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcsa_x5rg"/>`,
		"fallback": "la:sleigh-solid",
	});
}

export default Component;
