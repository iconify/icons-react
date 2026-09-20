import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tadldac1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tadldac1d"/>`,
		"fallback": "keyline-icons:thermometer-sharp",
	});
}

export default Component;
