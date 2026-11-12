import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twe_8u5bv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twe_8u5bv"/>`,
		"fallback": "selfhst:pf2etools-dark",
	});
}

export default Component;
