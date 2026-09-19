import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeq2uhbnr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeq2uhbnr"/>`,
		"fallback": "f7:square-favorites",
	});
}

export default Component;
