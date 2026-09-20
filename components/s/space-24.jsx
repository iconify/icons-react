import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwv8wbscl.css';
import '../../css/m/m7s0i2b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwv8wbscl"/><path class="m7s0i2b6b"/>`,
		"fallback": "octicon:space-24",
	});
}

export default Component;
