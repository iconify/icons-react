import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4cnmn_xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG2Ib8ObKe" class="h4cnmn_xu"/></defs><use href="#SVG2Ib8ObKe"/><use href="#SVG2Ib8ObKe"/>`,
		"fallback": "token:proteo",
	});
}

export default Component;
