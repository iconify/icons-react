import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izoaahe4v.css';
import '../../css/z/zrb4p4b7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izoaahe4v"/><path class="zrb4p4b7f"/>`,
		"fallback": "fxemoji:notepage",
	});
}

export default Component;
