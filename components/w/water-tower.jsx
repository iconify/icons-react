import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaz2klblv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaz2klblv"/>`,
		"fallback": "temaki:water-tower",
	});
}

export default Component;
