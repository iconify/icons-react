import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzommqhxv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzommqhxv"/>`,
		"fallback": "f7:paperplane",
	});
}

export default Component;
