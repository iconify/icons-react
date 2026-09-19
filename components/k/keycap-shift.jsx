import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa0wtpyvh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa0wtpyvh"/>`,
		"fallback": "dinkie-icons:keycap-shift",
	});
}

export default Component;
