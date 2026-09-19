import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uauxjs-rq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uauxjs-rq"/>`,
		"fallback": "f7:wand-rays",
	});
}

export default Component;
