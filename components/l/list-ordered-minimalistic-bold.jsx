import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp85bwqhm.css';
import '../../css/c/cftdehb-j.css';
import '../../css/h/h5wru_h7y.css';
import '../../css/e/e6mrdirfz.css';
import '../../css/c/cp41-4ybv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp85bwqhm"/><path class="cftdehb-j"/><path class="h5wru_h7y"/><path class="e6mrdirfz"/><path class="cp41-4ybv"/>`,
		"fallback": "solar:list-ordered-minimalistic-bold",
	});
}

export default Component;
