import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_crs_o9b.css';

const viewBox = {"width":59,"height":59,"left":582,"top":232.67};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_crs_o9b"/>`,
		"fallback": "thesvg-color:lumin-dark",
	});
}

export default Component;
