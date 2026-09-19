import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cty9l0r9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cty9l0r9r"/>`,
		"fallback": "cbi:mysa-thermostat",
	});
}

export default Component;
