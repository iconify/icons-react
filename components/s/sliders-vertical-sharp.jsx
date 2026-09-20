import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcs0clwsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcs0clwsx"/>`,
		"fallback": "keyline-icons:sliders-vertical-sharp",
	});
}

export default Component;
