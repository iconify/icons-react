import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhjf6rbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhjf6rbhc"/>`,
		"fallback": "coolicons:stethoscope-fill-round",
	});
}

export default Component;
