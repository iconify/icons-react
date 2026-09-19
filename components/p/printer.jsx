import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb4jfgbek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb4jfgbek"/>`,
		"fallback": "icomoon-free:printer",
	});
}

export default Component;
