import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/u/u6hybkbsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsJa0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsJa0)"><path class="mm_wv7bbg"/><circle class="u6hybkbsh"/></g>`,
		"fallback": "circle-flags:ja",
	});
}

export default Component;
