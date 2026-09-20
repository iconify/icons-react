import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbn5igc_g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbn5igc_g"/>`,
		"fallback": "temaki:lawn",
	});
}

export default Component;
