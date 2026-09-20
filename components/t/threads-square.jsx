import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh7tywstp.css';
import '../../css/s/szy8zrbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGngv3Lbdb" class="mh7tywstp"/></defs><use href="#SVGngv3Lbdb"/><path class="szy8zrbsp"/><use href="#SVGngv3Lbdb"/>`,
		"fallback": "mage:threads-square",
	});
}

export default Component;
