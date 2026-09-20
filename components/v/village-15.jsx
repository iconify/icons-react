import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km_r55b0m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km_r55b0m"/>`,
		"fallback": "maki:village-15",
	});
}

export default Component;
