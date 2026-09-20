import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al67269ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al67269ea"/>`,
		"fallback": "streamline-ultimate:phone-circle-bold",
	});
}

export default Component;
