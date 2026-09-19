import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz609_phz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz609_phz"/>`,
		"fallback": "griddy-icons:number-2",
	});
}

export default Component;
