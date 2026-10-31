import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebct5tb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebct5tb7w"/>`,
		"fallback": "coolicons:map-round",
	});
}

export default Component;
