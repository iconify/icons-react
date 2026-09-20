import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfc-29bll.css';
import '../../css/x/x_p186bjn.css';
import '../../css/a/a0c8erb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfc-29bll"/><path class="x_p186bjn"/><path class="a0c8erb8j"/>`,
		"fallback": "selfhst:wattbox",
	});
}

export default Component;
