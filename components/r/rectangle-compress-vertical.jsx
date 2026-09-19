import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfga9qgse.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfga9qgse"/>`,
		"fallback": "f7:rectangle-compress-vertical",
	});
}

export default Component;
