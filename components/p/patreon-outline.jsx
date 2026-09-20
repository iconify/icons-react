import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lga-v6l8y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lga-v6l8y"/>`,
		"fallback": "teenyicons:patreon-outline",
	});
}

export default Component;
