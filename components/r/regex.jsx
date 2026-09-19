import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzlx79zxm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzlx79zxm"/>`,
		"fallback": "bi:regex",
	});
}

export default Component;
