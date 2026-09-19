import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo8ap71oo.css';
import '../../css/o/ooj3jip1b.css';
import '../../css/f/fhqdiozkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo8ap71oo"/><circle class="ooj3jip1b"/><circle class="fhqdiozkx"/>`,
		"fallback": "gcp:premium-network-tier",
	});
}

export default Component;
