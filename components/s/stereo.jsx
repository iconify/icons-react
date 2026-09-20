import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcq5rub-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcq5rub-c"/>`,
		"fallback": "mdi:stereo",
	});
}

export default Component;
