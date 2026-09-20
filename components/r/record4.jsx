import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to4no2b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to4no2b0t"/>`,
		"fallback": "reicon:record4",
	});
}

export default Component;
