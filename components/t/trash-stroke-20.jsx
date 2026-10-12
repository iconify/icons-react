import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhpma-sca.css';
import '../../css/k/kyb_5vwwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhpma-sca"/><path class="kyb_5vwwp"/>`,
		"fallback": "garden:trash-stroke-20",
	});
}

export default Component;
