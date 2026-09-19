import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn81uccvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn81uccvp"/>`,
		"fallback": "cbi:nanoleaf-expo-display",
	});
}

export default Component;
