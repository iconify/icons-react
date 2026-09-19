import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm40gt1ok.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm40gt1ok"/>`,
		"fallback": "f7:plusminus",
	});
}

export default Component;
