import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izj2xgmec.css';
import '../../css/i/il1n2kszo.css';
import '../../css/j/jykge1big.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izj2xgmec"/><path class="il1n2kszo"/><path class="jykge1big"/>`,
		"fallback": "energy-icons:vector-pen-20-bold",
	});
}

export default Component;
