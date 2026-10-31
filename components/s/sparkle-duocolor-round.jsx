import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmqyipb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmqyipb7c"/>`,
		"fallback": "coolicons:sparkle-duocolor-round",
	});
}

export default Component;
