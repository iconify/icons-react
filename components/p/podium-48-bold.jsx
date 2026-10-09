import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr-eedcjf.css';
import '../../css/u/ua1y3_b3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr-eedcjf"/><path class="ua1y3_b3g"/>`,
		"fallback": "energy-icons:podium-48-bold",
	});
}

export default Component;
