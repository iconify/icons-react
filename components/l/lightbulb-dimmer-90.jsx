import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r470qoc2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r470qoc2k"/>`,
		"fallback": "mdi:lightbulb-dimmer-90",
	});
}

export default Component;
