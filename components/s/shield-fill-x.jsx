import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpsb7fehx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpsb7fehx"/>`,
		"fallback": "bi:shield-fill-x",
	});
}

export default Component;
