import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf7xaq13d.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf7xaq13d"/>`,
		"fallback": "fontisto:mars-stroke-h",
	});
}

export default Component;
