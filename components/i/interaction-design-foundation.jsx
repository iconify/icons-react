import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mii9zibzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mii9zibzu"/>`,
		"fallback": "thesvg-color:interaction-design-foundation",
	});
}

export default Component;
