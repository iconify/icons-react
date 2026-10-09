import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emwyceb2k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emwyceb2k"/>`,
		"fallback": "energy-icons:solar-forecast-20",
	});
}

export default Component;
