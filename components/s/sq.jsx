import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/a/aev8zfb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsSq0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsSq0)"><path class="wj-7246uw"/><path class="aev8zfb-s"/></g>`,
		"fallback": "circle-flags:sq",
	});
}

export default Component;
