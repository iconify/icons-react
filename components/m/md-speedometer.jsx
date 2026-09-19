import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybyhcbfuv.css';
import '../../css/e/eu08s8bww.css';
import '../../css/q/qwin8ubae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybyhcbfuv"/><path class="eu08s8bww"/><path class="qwin8ubae"/>`,
		"fallback": "ion:md-speedometer",
	});
}

export default Component;
