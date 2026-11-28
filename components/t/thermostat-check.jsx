import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv5y_6bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv5y_6bfw"/>`,
		"fallback": "noviair-light:thermostat-check",
	});
}

export default Component;
