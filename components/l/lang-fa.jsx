import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xi8f7-cfb.css';
import '../../css/y/y8j_hsb4g.css';
import '../../css/m/mbpirf25d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="xi8f7-cfb"/><path class="y8j_hsb4g"/><path class="mbpirf25d"/></g>`,
		"fallback": "circle-flags:lang-fa",
	});
}

export default Component;
