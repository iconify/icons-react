import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncn6uccel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncn6uccel"/>`,
		"fallback": "noviair-light:smart-home",
	});
}

export default Component;
