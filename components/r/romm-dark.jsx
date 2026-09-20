import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v12ih4bka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v12ih4bka"/>`,
		"fallback": "selfhst:romm-dark",
	});
}

export default Component;
