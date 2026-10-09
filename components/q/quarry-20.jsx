import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcn2ntbav.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcn2ntbav"/>`,
		"fallback": "energy-icons:quarry-20",
	});
}

export default Component;
