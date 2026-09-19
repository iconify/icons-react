import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkf1x5yse.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkf1x5yse"/>`,
		"fallback": "dinkie-icons:smoking-symbol",
	});
}

export default Component;
