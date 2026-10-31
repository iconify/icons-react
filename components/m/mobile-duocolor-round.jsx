import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv9g8xxos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv9g8xxos"/>`,
		"fallback": "coolicons:mobile-duocolor-round",
	});
}

export default Component;
