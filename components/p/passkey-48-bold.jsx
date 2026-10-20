import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t55dglbwd.css';
import '../../css/i/i2dsa1fpp.css';
import '../../css/m/mpef91b-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t55dglbwd"/><path class="i2dsa1fpp"/><path class="mpef91b-c"/>`,
		"fallback": "energy-icons:passkey-48-bold",
	});
}

export default Component;
