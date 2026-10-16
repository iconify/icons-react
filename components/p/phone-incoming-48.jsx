import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3j068ntp.css';
import '../../css/u/uwilteebl.css';
import '../../css/j/jeboob2cw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3j068ntp"/><path class="uwilteebl"/><path class="jeboob2cw"/>`,
		"fallback": "energy-icons:phone-incoming-48",
	});
}

export default Component;
