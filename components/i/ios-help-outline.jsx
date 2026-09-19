import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itc5zdbai.css';
import '../../css/r/rk-x6tbbo.css';
import '../../css/z/zayszsbla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itc5zdbai"/><path class="rk-x6tbbo"/><path class="zayszsbla"/>`,
		"fallback": "ion:ios-help-outline",
	});
}

export default Component;
