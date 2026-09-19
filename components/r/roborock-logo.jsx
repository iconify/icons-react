import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gen1u6ueu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gen1u6ueu"/>`,
		"fallback": "cbi:roborock-logo",
	});
}

export default Component;
