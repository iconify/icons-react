import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhc3qnbeu.css';
import '../../css/z/zv-53k7bp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhc3qnbeu"/><path class="zv-53k7bp"/>`,
		"fallback": "ion:ios-nutrition",
	});
}

export default Component;
