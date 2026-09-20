import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si9tr4_ad.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si9tr4_ad"/>`,
		"fallback": "maki:warehouse-15",
	});
}

export default Component;
