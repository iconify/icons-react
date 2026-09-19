import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0elrnbcf.css';
import '../../css/j/j5257yb9v.css';
import '../../css/y/ydnb04iod.css';
import '../../css/y/ymie1nvqo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0elrnbcf"/><circle class="j5257yb9v"/><path class="ydnb04iod"/><path class="ymie1nvqo"/>`,
		"fallback": "carbon:temperature-celsius",
	});
}

export default Component;
