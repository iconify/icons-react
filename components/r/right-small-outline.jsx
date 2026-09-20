import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr6y515mv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr6y515mv"/>`,
		"fallback": "teenyicons:right-small-outline",
	});
}

export default Component;
