import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz8krcb2j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz8krcb2j"/>`,
		"fallback": "f7:phone-arrow-right",
	});
}

export default Component;
