import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/i/icbay4bqb.css';
import '../../css/q/q3tznzbmw.css';
import '../../css/e/e9svol1js.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wj-7246uw"/><path class="icbay4bqb"/><circle class="q3tznzbmw"/><path class="e9svol1js"/></g>`,
		"fallback": "circle-flags:kg",
	});
}

export default Component;
