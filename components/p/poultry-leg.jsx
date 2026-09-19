import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3g89ob7z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3g89ob7z"/>`,
		"fallback": "dinkie-icons:poultry-leg",
	});
}

export default Component;
