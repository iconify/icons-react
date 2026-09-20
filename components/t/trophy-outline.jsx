import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk877rgaz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk877rgaz"/>`,
		"fallback": "teenyicons:trophy-outline",
	});
}

export default Component;
