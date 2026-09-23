import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2e8exbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2e8exbyx"/>`,
		"fallback": "keyline-icons:trending-up-down-sharp-duotone",
	});
}

export default Component;
