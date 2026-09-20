import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqpn2xbyl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqpn2xbyl"/>`,
		"fallback": "teenyicons:router-outline",
	});
}

export default Component;
