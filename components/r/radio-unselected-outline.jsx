import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trp_db72c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trp_db72c"/>`,
		"fallback": "lsicon:radio-unselected-outline",
	});
}

export default Component;
