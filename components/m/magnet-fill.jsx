import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2n_u8yaa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2n_u8yaa"/>`,
		"fallback": "bi:magnet-fill",
	});
}

export default Component;
