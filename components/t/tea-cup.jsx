import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utm_3nbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utm_3nbca"/>`,
		"fallback": "streamline-sharp:tea-cup",
	});
}

export default Component;
