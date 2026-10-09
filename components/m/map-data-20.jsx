import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg3i25mms.css';
import '../../css/u/u80q53cnt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg3i25mms"/><path class="u80q53cnt"/>`,
		"fallback": "energy-icons:map-data-20",
	});
}

export default Component;
