import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv731-ofg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv731-ofg"/>`,
		"fallback": "ix:reference-point-top-left",
	});
}

export default Component;
